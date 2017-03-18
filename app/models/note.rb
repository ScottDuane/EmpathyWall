class Note < ActiveRecord::Base
  validates :content, presence: true
  has_many :note_tags 
  has_many :tags, through: :note_tags
end
