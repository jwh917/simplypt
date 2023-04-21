class AppointmentsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response


    def index
      appointments = Appointment.all
      render json: appointments
    end
  
    def create 
      appointment = Appointment.new(app_params)

      existing_appointment = Appointment.where(physical_therapist_id: appointment.physical_therapist_id, date: appointment.date, time: appointment.time).first

      existing_dt_appointment = Appointment.where(patient_id: appointment.patient_id, date: appointment.date, time: appointment.time).first

      if existing_appointment.present? || existing_dt_appointment.present?
   
        render json: {error: ["An appointment already exists at this date and time."] }, status: :unprocessable_entity
    
      elsif appointment.save
        render json: appointment, status: :created

      else 
        render json: {error: ["1 Appointment Per Day"] }, status: :unprocessable_entity
      end
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
      params.permit(:patient_id, :physical_therapist_id, :time, :date)
    end
  
    def render_not_found_response
      render json: { error: "Appointment not found" }, status: :not_found
    end

end
