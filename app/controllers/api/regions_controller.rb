class Api::RegionsController < ApplicationController
  def index
    @regions = Region.all
  end

  private

  def region_params
    params.require(:region).permit(:name, :state)
  end
end
