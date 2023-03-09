class PatientSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :email, :image, :patient_profile, :physical_therapists, 
end
