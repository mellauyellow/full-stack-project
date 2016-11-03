class AddNId < ActiveRecord::Migration
  def change
    add_column :images, :neighborhood_id, :integer
  end
end
