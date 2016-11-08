class Api::ImagesController < ApplicationController
  def index
    neighborhood_id = params[:neighborhood_id]
    @images = Image.where("neighborhood_id = ?", neighborhood_id)
  end

  def create
    @image = Image.new(image_params);

    if @image.save
      render :show
    else
      @errors = @image.errors
      render :json => @errors, status: 422
    end
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
