class RecommendedEquipment < ApplicationRecord
  belongs_to :patient
  belongs_to :physical_therapist

  # validates :product_description, presence: true
end
