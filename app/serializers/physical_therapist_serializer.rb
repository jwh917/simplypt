class PhysicalTherapistSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :email, :image, :patients, :type
end
