class CreateRecommendedEquipments < ActiveRecord::Migration[6.1]
  def change
    create_table :recommended_equipments do |t|
      t.integer :patient_id
      t.integer :physical_therapist_id
      t.string :product_name
      t.string :product_url
      t.string :product_description

      t.timestamps
    end
  end
end
