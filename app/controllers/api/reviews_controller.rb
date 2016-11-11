class Api::ReviewsController < ApplicationController
  def index
    neighborhood_id = params[:neighborhood_id]
    @reviews = Review.where("neighborhood_id = ?", neighborhood_id).order(created_at: :desc)
  end

  def create
    @review = Review.new(review_params)
    images = params[:review][:images]

    if @review.save
      unless images.nil?
        image_objects = images.map do |key, image|
          url = image["url"]
          user_id = image["user_id"]
          neighborhood_id = image["neighborhood_id"]
          @review.images << Image.create(url: url, user_id: user_id, neighborhood_id: neighborhood_id)
        end
      end
      render :show
    else
      @errors = @review.errors
      render :json => @errors, status: 422
    end
  end

  def destroy
    Review.delete(params[:id])
    neighborhood_id = params[:neighborhood_id]
    @reviews = Review.where("neighborhood_id = ?", neighborhood_id).order(created_at: :desc)
    render :index
  end

  private

  def review_params
    params.require(:review).permit(:body,
                                   :good_for_pets,
                                   :good_for_bikes,
                                   :good_for_singles,
                                   :good_for_families,
                                   :street_parking,
                                   :user_id,
                                   :neighborhood_id,
                                   :created_at)
  end
end
