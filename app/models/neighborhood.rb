class Neighborhood < ActiveRecord::Base
  validates :name, :center_lat, :center_long, :walk_score,
    :transit_score, :cost_of_living, :housing_type, :region_id, presence: true

  belongs_to :region,
    class_name: :Region,
    foreign_key: :region_id,
    primary_key: :id

  has_many :reviews,
    class_name: :Review,
    foreign_key: :neighborhood_id,
    primary_key: :id

  has_many :images,
    through: :reviews,
    source: :images
end
