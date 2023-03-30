class AddEquipmentToExercises < ActiveRecord::Migration[6.1]
  def change
    add_column :exercises, :equipment, :string
  end
end
