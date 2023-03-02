class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :physical_therapist
  belongs_to :administrator

  validates :time, presence: true

end
