class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :patient_id, :physical_therapist_id, :administrator_id, :time, :date
end
