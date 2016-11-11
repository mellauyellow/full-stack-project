class UpdateDefaultsImages < ActiveRecord::Migration
  def change
    change_column :images, :caption, :string, default: ""
  end
end
