class Api::ImagesController < ApplicationController
  def index
    neighborhood_id = params[:neighborhood_id]
    @images = Image.where("neighborhood_id = ?", neighborhood_id)
  end

  private

  def image_params
    params.require(:image).permit(:url,
                                  :created_at,
                                  :caption,
                                  :user_id,
                                  :review_id,
                                  :region_rep,
                                  :neighborhood_rep,
                                  :neighborhood_id)
  end
end
