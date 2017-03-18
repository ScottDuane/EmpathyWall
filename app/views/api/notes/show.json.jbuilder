json.note do
  json.content @note.content
  json.color @note.color
  json.matches @note.note_tags 
  json.tags @note.tags
end
