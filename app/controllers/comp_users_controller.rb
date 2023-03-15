class CompUsersController < ApplicationController

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


  private

  def compuser_params
    params.permit(:username, :password, :password_confirmation, :name, :email, :image, :type)
  end
end
