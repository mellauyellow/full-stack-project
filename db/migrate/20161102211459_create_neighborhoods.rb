class CreateNeighborhoods < ActiveRecord::Migration
  def change
    create_table :neighborhoods do |t|
      t.string :name, null: false
      t.float :center_lat, null: false
      t.float :center_long, null: false
      t.integer :walk_score, null: false
      t.integer :transit_score, null: false
      t.integer :cost_of_living, null: false
      t.string :housing_type, null: false
      t.string :architecture_type
      t.integer :region_id
      t.timestamps null: false
    end

    add_index :neighborhoods, :region_id
  end
end
