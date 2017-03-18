class Tag < ActiveRecord::Base
  validates :name, :occurrences, presence: true
  has_many :note_tags 
  has_many :notes, through: :note_tags
end
