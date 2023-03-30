class AddGifurlToExercises < ActiveRecord::Migration[6.1]
  def change
    add_column :exercises, :gifurl, :string
  end
end
