class ProfilePicDefault < ActiveRecord::Migration
  def change
    change_column :users, :profile_pic_url, :string, default: "https://robohash.org/new-user.png?size=50x50"
  end
end
