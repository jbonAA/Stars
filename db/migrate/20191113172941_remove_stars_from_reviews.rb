class RemoveStarsFromReviews < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :stars
  end
end
