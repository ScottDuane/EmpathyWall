class AddOccurrencesToTags < ActiveRecord::Migration
  def change
    add_column :tags, :occurrences, :integer, default: 0 
  end
end
