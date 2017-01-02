class Api::RegionsController < ApplicationController
  def index
    @regions = Region.all
  end

  def show
    score_filter_buckets = {
      "high": (86..100),
      "med": (71..85),
      "low": (0..70),
      "default": (0..100)
    }

    col_filter_buckets = {
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "default": (1..4)
    }

    @region = Region.find_by_id(params[:id])
    all_neighborhoods = @region.neighborhoods
    # 
    # if params[:north]
    #   all_neighborhoods = in_bounds({north: params[:north].to_f, south: params[:south].to_f, west: params[:west].to_f, east: params[:east].to_f}, @region)
    # end

    if params[:most_like] == "default"
      @neighborhoods = all_neighborhoods.where(
        walk_score: score_filter_buckets[(params[:walk_score]).to_sym],
        transit_score: score_filter_buckets[(params[:transit_score]).to_sym],
        cost_of_living: col_filter_buckets[(params[:cost_of_living]).to_sym])
    elsif params[:most_like]
      sim_neighborhood = Neighborhood.find_by_id(params[:most_like])
      filtered_neighborhoods = all_neighborhoods.where(
        "walk_score >= :low_sim_walk_score AND transit_score >= :low_sim_transit_score AND cost_of_living <= :low_sim_cost_of_living AND
        walk_score < :high_sim_walk_score AND transit_score < :high_sim_transit_score AND cost_of_living > :high_sim_cost_of_living
        ",
        {
          low_sim_walk_score: sim_neighborhood.walk_score * 0.85,
          low_sim_transit_score: sim_neighborhood.transit_score * 0.85,
          low_sim_cost_of_living: sim_neighborhood.cost_of_living,
          high_sim_walk_score: sim_neighborhood.walk_score * 1.15,
          high_sim_transit_score: sim_neighborhood.transit_score * 1.15,
          high_sim_cost_of_living: sim_neighborhood.cost_of_living - 1,
        }
      )

      @neighborhoods = filtered_neighborhoods.where(
        walk_score: score_filter_buckets[(params[:walk_score]).to_sym],
        transit_score: score_filter_buckets[(params[:transit_score]).to_sym],
        cost_of_living: col_filter_buckets[(params[:cost_of_living]).to_sym])
    end


    @images = @region.images.where(neighborhood_rep: true)
  end

  private

  def in_bounds(bounds, region)
    region.neighborhoods.where(
      "center_lat <= :north AND center_lat >= :south AND center_long <= :east AND center_long >= :west",
      {
        north: bounds['north'],
        south: bounds['south'],
        east: bounds['east'],
        west: bounds['west']
      }
    )
  end

  def use_filter?(filter)
    params[filter] == "default" ? false : true
  end

  def region_params
    params.require(:region).permit(:name, :state, :center_lat, :center_long)
  end
end
