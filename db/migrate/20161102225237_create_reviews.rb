class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :body, null: false
      t.boolean :good_for_pets
      t.boolean :good_for_bikes
      t.boolean :good_for_singles
      t.boolean :good_for_families
      t.boolean :street_parking
      t.integer :user_id, null: false
      t.integer :neighborhood_id, null: false
      t.timestamps null: false
    end

    add_index :reviews, :user_id
    add_index :reviews, :neighborhood_id
  end
end
