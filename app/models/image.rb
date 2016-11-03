class Image < ActiveRecord::Base
  validates :url, :user_id, presence: true
  validates :url, uniqueness: true

  belongs_to :review,
    class_name: :Review,
    foreign_key: :review_id,
    primary_key: :id

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :neighborhood,
    class_name: :Neighborhood,
    foreign_key: :neighborhood_id,
    primary_key: :id
end
