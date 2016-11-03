class Api::NeighborhoodsController < ApplicationController
  def index
    region_id = params[:region_id]
    @neighborhoods = Neighborhood.where("region_id = ?", region_id)
  end

  def show
    @neighborhood = Neighborhood.find_by_id(params[:id])
  end

  private

  def neighborhood_params
    params.require(:neighborhood).permit(:name,
                                         :center_lat,
                                         :center_long,
                                         :walk_score,
                                         :transit_score,
                                         :cost_of_living,
                                         :housing_type,
                                         :architecture_type,
                                         :region_id)
  end
end
