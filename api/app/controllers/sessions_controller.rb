class SessionsController < ApplicationController

  def create
    @user = User.find_by_credential(params[:user][:username], params[:user][:password])
    if @user
      token = SecureRandom.urlsafe_base64
      Session.create!(user: @user, token: token)
      session[:token] = token
      render 'users/show'
    else
      render json: ["Invalid username or password"], status: 401
    end
  end

  def index
    result = Session.includes(:user).find_by_token(session[:token])
    if @user
      @user = result.user
      render 'users/show'
    else
      render json: ["Permission Denied"], status: 401
    end
  end

  def destroy
    session = Session.find_by_token(params[:id])
    session&.destroy!
    render status: 204
  end

end
