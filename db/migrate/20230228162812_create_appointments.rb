class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.integer :patient_id
      t.integer :physical_therapist_id
      t.integer :administrators_id
      t.integer :time

      t.timestamps
    end
  end
end
