class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :url, null: false
      t.integer :review_id, null: false
      t.boolean :region_rep, null: false
      t.boolean :neighborhood_rep, null: false
      t.timestamps null: false
    end

    add_index :images, :url, unique: true
    add_index :images, :review_id
  end
end
