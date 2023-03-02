class PhysicalTherapist < CompUser
  has_many :appointments

  has_many :patients, through: :appointments

  has_many :exercises

end
