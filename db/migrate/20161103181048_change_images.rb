class ChangeImages < ActiveRecord::Migration
  def change
    remove_column :images, :review_id
    add_column :images, :user_id, :integer, null: false
    add_index :images, :user_id
    add_column :images, :review_id, :integer
  end
end
