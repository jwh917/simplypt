class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.integer :patient_id
      t.integer :physical_therapist_id
      t.string :time

      t.timestamps
    end
  end
end
