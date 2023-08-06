class PatientSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :email, :image, :type, :patient_profile, :physical_therapists, :appointments, :exercises, :recommended_equipments
end
