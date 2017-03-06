# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Note.create([ { content: "If not now, when?  If not me, who?", color: "blue" },
              { content: "Trump values do not live in California", color: "pink" },
              { content: "I <3 you", color: "yellow" },
              { content: "Make America human again", color: "yellow" } ])

Tag.create([ { name: "transgender", note_id: 1, occurrences: 1 },
             { name: "love", note_id: 0, occurrences: 3 },
             { name: "patriotism", note_id: 1, occurrences: 2 }])

NoteTag.create([ { note_id: 1, tag_id: 0 },
                  { note_id: 1, tag_id: 1 }])
