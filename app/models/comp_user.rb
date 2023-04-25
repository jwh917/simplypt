class CompUser < ApplicationRecord

  validates :username, presence: true, uniqueness: true
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :image, presence: true, uniqueness: true
  validates :type, presence: true

  has_secure_password
end

