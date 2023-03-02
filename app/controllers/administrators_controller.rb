class AdministratorsController < ApplicationController

  # R
  # login/logout

  def index
    administrator = Administrator.all
    render json: administrator
  end

  def show
    administrator = find_adm
    render json: administrator
  end

  private

  def find_adm
    Administrator.find(params[:id])
  end

  # params

end
