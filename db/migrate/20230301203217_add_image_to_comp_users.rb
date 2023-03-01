class AddImageToCompUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :comp_users, :image, :string
  end
end
