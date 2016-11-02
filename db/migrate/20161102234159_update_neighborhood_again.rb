class UpdateNeighborhoodAgain < ActiveRecord::Migration
  def change
    change_column :neighborhoods, :region_id, :integer, null: false
  end
end
