class CreatePatientProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :patient_profiles do |t|
      t.integer :patient_id
      t.string :dob
      t.string :address
      t.string :phone
      t.string :sex
      t.string :muscle_injury

      t.timestamps
    end
  end
end
