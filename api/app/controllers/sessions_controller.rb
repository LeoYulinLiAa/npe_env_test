class SessionsController < ApplicationController

  def create
    p request.body.read
    @user = User.find_by_credential(params[:user][:username], params[:user][:password])
    if @user
      new_session = Session.create!(user: @user, token: SecureRandom.urlsafe_base64)
      render 'users/show'
    else
      render json: ["Invalid username or password"], status: 401
    end
  end

  def show
    session = Session.includes(:user).find_by_token(params[:token])
    @user = session.user
    render 'users/show'
  end

  def destroy
    session = Session.find_by_token(params[:token])
    session&.destroy!
    render status: 204
  end

end
