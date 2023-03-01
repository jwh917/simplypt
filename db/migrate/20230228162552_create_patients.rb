class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.string :username
      t.string :password_digest
      t.string :name
      t.string :email
      t.string :dob
      t.string :address
      t.integer :phone
      t.string :sex
      t.string :muscle_injury
      t.integer :physical_therapist_id

      t.timestamps
    end
  end
end
