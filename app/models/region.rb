class Region < ActiveRecord::Base
  validates :name, :state, presence: true

  has_many :neighborhoods,
    class_name: :Neighborhood,
    foreign_key: :region_id,
    primary_key: :id

  has_many :images,
    through: :neighborhoods,
    source: :images
end
