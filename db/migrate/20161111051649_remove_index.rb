class RemoveIndex < ActiveRecord::Migration
  def change
    remove_index :images, :user_id
  end
end
