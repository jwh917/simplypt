class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :patient_id, :physical_therapist_id, :administrators_id, :time
end
