class Image < ActiveRecord::Base
  validates :url, :review_id, :region_rep, :neighborhood_rep, presence: true
  validates :url, uniqueness: true

  belongs_to :review,
    class_name: :Review,
    foreign_key: :review_id,
    primary_key: :id
end
