class AddImageToPatients < ActiveRecord::Migration[6.1]
  def change
    add_column :patients, :image, :string
  end
end
