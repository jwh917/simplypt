class Exercise < ApplicationRecord
  belongs_to :patient
  belongs_to :physical_therapist

  validates :description, presence: true

end
