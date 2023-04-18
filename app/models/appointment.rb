class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :physical_therapist

  validates :time, presence: true

  validates :date, presence: true


  validate :check_for_duplicate_appointments

  private
  
  def check_for_duplicate_appointments
    
    # check for existing appointments with the same patient, therapist, and date
    existing_appointment = Appointment.find_by(patient_id: patient_id, physical_therapist_id: physical_therapist_id, date: date)
    
    # if an existing appointment is found, add an error message to the model
    if existing_appointment && existing_appointment != self
      errors.add(:date, "already has an existing appointment with this patient and therapist")
    end
  end



end