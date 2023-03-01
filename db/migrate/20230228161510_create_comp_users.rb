class CreateCompUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :comp_users do |t|
      t.string :username
      t.string :password_digest
      t.string :name
      t.string :email
      t.string :type

      t.timestamps
    end
  end
end
