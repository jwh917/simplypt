class CompUser < ApplicationRecord

  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :image, presence: true, uniqueness: true

end

