class Region < ActiveRecord::Base
  validates :name, :state, presence: true

  has_many :neighborhoods
end
