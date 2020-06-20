class ApplicationController < ActionController::API

  def current_user
    @current_user ||= User.find_by_token(session[:token])
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in
    render json: ["Please log in"], status: 401 unless logged_in?
  end

end
