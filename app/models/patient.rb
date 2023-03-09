class Patient < CompUser
  has_one :patient_profile, dependent: :destroy
  
  has_many :appointments
  has_many :exercises

  # belongs_to :physical_therapist
  # change
  has_many :physical_therapists, through: :appointments




end
