class Exercise < ApplicationRecord
  belongs_to :patient

  validates :description, presence: true

end
