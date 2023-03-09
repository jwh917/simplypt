class PatientProfile < ApplicationRecord
  belongs_to :patient



  validates :dob, presence: true
  validates :address, presence: true
  validates :phone, presence: true
  validates :sex, presence: true
  validates :muscle_injury, presence: true

end
