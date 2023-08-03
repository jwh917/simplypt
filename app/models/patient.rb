class Patient < CompUser
  has_one :patient_profile, dependent: :destroy
  
  has_many :appointments, dependent: :destroy
  
  has_many :exercises, dependent: :destroy

  has_many :recommended_equipments, dependent: :destroy

  has_many :physical_therapists, through: :appointments

end
