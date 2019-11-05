class AddNameColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first, :string, null: false
    add_column :users, :last, :string, null: false
  end
end
