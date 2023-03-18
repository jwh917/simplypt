class PatientProfilesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  
      # CRUD
      # error messsages
  
    def index
      patient_profiles = PatientProfile.all
      render json: patient_profiles
    end
  
    def show
      patient_profile = find_pat_pro
      render json: patient_profile
    end
    
    def create
      patient_profile = PatientProfile.create!(pat_pro_params)
      render json: patient_profile, status: :created
    end
    
    def update
      patient_profile = find_pat_pro
      patient_profile.update(pat_pro_params)
      render json: patient_profile
    end 
    
    def destroy
      patient_profile = find_pat_pro
      patient_profile.destroy
      head :no_content
    end
  
    private
  
    def find_pat_pro
      PatientProfile.find(params[:id])
    end
    
    def pat_pro_params
      params.permit(:patient_id, :dob, :address, :phone, :sex, :muscle_injury)
    end
    
    def render_not_found_response
      render json: { error: "Patient not found" }, status: :not_found
    end

end
