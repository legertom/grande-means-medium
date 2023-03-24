class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :bio
      t.string :photoUrl
      t.string :url

      t.timestamps
    end
  end
end
