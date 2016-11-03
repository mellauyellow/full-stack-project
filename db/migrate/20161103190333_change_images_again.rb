class ChangeImagesAgain < ActiveRecord::Migration
  def change
    remove_column :images, :region_rep
    remove_column :images, :neighborhood_rep
    add_column :images, :region_rep, :boolean
    add_column :images, :neighborhood_rep, :boolean
  end
end
