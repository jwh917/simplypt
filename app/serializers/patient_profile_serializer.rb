class PatientProfileSerializer < ActiveModel::Serializer
  attributes :id, :patient_id, :dob, :address, :phone, :sex, :muscle_injury
end
