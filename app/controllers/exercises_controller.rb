class ExercisesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # CRD
    # error messsages

    def index
      exercises = Exercise.all
      render json: exercises
    end

    def show
      exercise = find_exe
      render json: exercise
    end
  
    def create
      exercise = Exercise.create!(exe_params)
      render json: exercise, status: :created
    end
  
  
    def destroy
      exercise = find_exe
      exercise.destroy
      head :no_content
    end

    private

    def find_exe
      Exercise.find(params[:id])
    end
  
    def exe_params
      params.permit(:patient_id, :physical_therapist_id, :description, :muscle)
    end
  
    def render_not_found_response
      render json: { error: "Exercise not found" }, status: :not_found
    end
end

