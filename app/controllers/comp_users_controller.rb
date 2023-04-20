class CompUsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  skip_before_action :authorize, only: [:create, :keysToSimplyPT]

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
  


  def keysToSimplyPT
    render json: { 
                    email_service: ENV["email_service"],
                    email_key: ENV["email_key"],
                    exercise_key: ENV["exercise_key"],
                    upload_preset: ENV["upload_preset"],
                    cloud_name: ENV["cloud_name"]
                  }
  end


  private

  def compuser_params
    params.permit(:username, :password, :password_confirmation, :name, :email, :type, :image)
  end

  def render_not_found_response
    render json: { error: "Comp User not found" }, status: :not_found
  end
end
