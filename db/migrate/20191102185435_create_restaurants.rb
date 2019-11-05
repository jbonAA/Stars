class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :website, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :address, null: false
      t.integer :stars
      t.boolean :delivery
      t.boolean :takeout
      t.string :price
      t.string :established, null: false
      t.string :phone, null: false
      t.string :hours, null: false
      t.timestamps
    end

    add_index :restaurants, :name
  end
end
