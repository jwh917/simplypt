class AdministratorSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :email, :image
end
