class UpdateRegions < ActiveRecord::Migration
  def change
    add_column :regions, :center_lat, :float
    add_column :regions, :center_long, :float
  end
end
