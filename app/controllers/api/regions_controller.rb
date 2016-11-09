class Api::RegionsController < ApplicationController
  def index
    @regions = Region.all
  end

  def show
    # debugger
    @region = Region.find_by_id(params[:id])
    @neighborhoods = @region.neighborhoods
    @images = @region.images.where(neighborhood_rep: true)
  end

  private

  def region_params
    params.require(:region).permit(:name, :state, :center_lat, :center_long)
  end
end
