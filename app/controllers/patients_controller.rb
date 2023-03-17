class PatientsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # CRUD
    # login/logout
    # error messsages

    def index
      patients = Patient.all
      render json: patients
    end

    def show
      patient = find_pat
      render json: patient
    end
  
    def create
      patient = Patient.create!(pat_params)
      render json: patient, status: :created
    end
  
    def update
      patient = find_pat
      patient.update(pat_params)
      render json: patient
    end 
  
    def destroy
      patient = find_pat
      patient.destroy
      head :no_content
    end

    private

    def find_pat
      Patient.find(params[:id])
    end
  
    def pat_params
      params.permit(:username, :password, :password_confirmation, :name, :email, type:, :image)
    end
  
    def render_not_found_response
      render json: { error: "Patient not found" }, status: :not_found
    end

end