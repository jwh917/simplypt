class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

  private 

  def authorize
    @current_user = CompUser.find_by(id: session[:user_id])

    render json: { errors: ["Not Authorized/Not Signed In"] }, status: :unauthorized unless @current_user
  end 

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
