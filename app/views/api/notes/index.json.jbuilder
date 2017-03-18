json.notes @notes do |note|
  json.content note.content
  json.color note.color
  json.tags note.tags 
end
