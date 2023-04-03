class AddPhysicalTherapistName < ActiveRecord::Migration[6.1]
  def change
    add_column :exercises, :physical_therapist_name, :string
  end
end
