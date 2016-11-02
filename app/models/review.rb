class Review < ActiveRecord::Base
  validates :body, :user_id, :neighborhood_id, presence: true

  has_many :images,
    class_name: :Image,
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
