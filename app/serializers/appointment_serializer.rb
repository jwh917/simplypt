class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :patient_id, :physical_therapist_id, :time, :date, :physical_therapist, :patient

  belongs_to :patient
  belongs_to :physical_therapist
end
