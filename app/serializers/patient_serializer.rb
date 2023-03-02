class PatientSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :email, :dob, :address, :phone, :sex, :muscle_injury, :physical_therapist_id, :image
end
