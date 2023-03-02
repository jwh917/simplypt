class AppointmentsController < ApplicationController
  # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # CRUD
    # login/logout
    # error messsages

    def index
      appointments = Appointment.all
      render json: appointments
    end

    def show
      appointment = find_app
      render json: appointment
    end
  
    def create
      appointment = Appointment.create!(app_params)
      render json: appointment, status: :created
    end
  
    def update
      appointment = find_app
      appointment.update(app_params)
      render json: appointment
    end 
  
    def destroy
      appointment = find_app
      appointment.destroy
      head :no_content
    end

    private

    def find_app
      Appointment.find(params[:id])
    end
  
    def app_params
      params.permit(:patient_id, :physical_therapist_id, :administrator_id, :time, :date)
    end
  
    # def render_not_found_response
    #   render json: { error: "Appointment not found" }, status: :not_found
    # end

end
