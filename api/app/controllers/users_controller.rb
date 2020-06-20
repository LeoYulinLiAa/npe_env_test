class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      Session.create(user: @user, token: SecureRandom.urlsafe_base64)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find_by_id(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
