class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      @errors = @user.errors
      render :json => @errors, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :first_name, :last_name, :zip_code, :profile_pic_url)
  end
end
