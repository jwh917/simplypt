class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :physical_therapist

  validates :time, presence: true
  validates :date, presence: true

end
