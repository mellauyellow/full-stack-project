class Neighborhood < ActiveRecord::Base
  validates :name, :center_lat, :center_long, :walk_score,
    :transit_score, :cost_of_living, :housing_type, presence: true

  belongs_to :region
end
