class CompUsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  skip_before_action :authorize, only: [:create]

  def all
    comp_users = CompUser.all
    render json: comp_users
  end

  def create
    user = CompUser.create!(compuser_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  def update
    user = @current_user
    user.update(compuser_params)
    render json: user
  end 

  def destroy
    user = @current_user
    user.destroy
    head :no_content
  end
  

  def email_service 
    render json: { email_service: ENV["email_service"] }
  end

  def email_key
    render json: { email_key: ENV["email_key"] }
  end

  def exercise_key 
    render json: { exercise_key: ENV["exercise_key"] }
  end



  def upload_preset
    render json: { upload_preset: ENV["upload_preset"] }
  end

  def cloud_name 
    render json: { cloud_name: ENV["cloud_name"] }
  end




  private

  def compuser_params
    params.permit(:username, :password, :password_confirmation, :name, :email, :type, :image)
  end

  def render_not_found_response
    render json: { error: "Comp User not found" }, status: :not_found
  end
end
