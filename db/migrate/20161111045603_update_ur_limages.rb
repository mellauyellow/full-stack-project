class UpdateUrLimages < ActiveRecord::Migration
  def change
    remove_column :images, :url
    add_column :images, :url, :string, null: false, default: "test.com"
  end
end
