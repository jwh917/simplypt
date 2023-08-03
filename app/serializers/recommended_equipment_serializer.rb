class RecommendedEquipmentSerializer < ActiveModel::Serializer
  attributes :id, :patient_id, :physical_therapist_id, :product_name, :product_url, :product_description
end
