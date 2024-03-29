class ExercisesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  
    def create
      exercise = Exercise.create!(exe_params)
      render json: exercise, status: :created
    end

    private
  
    def exe_params
      params.permit(:patient_id, :physical_therapist_id, :physical_therapist_name, :description, :muscle, :equipment, :gifurl)
    end
  
    def render_not_found_response
      render json: { error: "Exercise not found" }, status: :not_found
    end
end
