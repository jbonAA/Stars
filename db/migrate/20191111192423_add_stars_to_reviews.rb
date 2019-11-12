class AddStarsToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :stars, :string, null: false
  end
end
