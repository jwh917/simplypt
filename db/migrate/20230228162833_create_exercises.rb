class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.integer :patient_id
      t.integer :physical_therapist_id
      t.string :description

      t.timestamps
    end
  end
end
