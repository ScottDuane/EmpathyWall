json.notes @notes do |note|
  json.id note.id
  json.content note.content
  json.color note.color
  json.tags note.tags
end
