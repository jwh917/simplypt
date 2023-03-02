class Patient < ApplicationRecord
  has_many :appointments
  has_many :exercises

  belongs_to :physical_therapist


  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true

  validates :dob, presence: true
  validates :address, presence: true
  validates :phone, presence: true
  validates :sex, presence: true
  validates :muscle_injury, presence: true
  validates :image, presence: true, uniqueness: true
  
end
