class CompUserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :email, :type, :image
end
