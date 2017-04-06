json.tags @tags do |tag|
  json.id tag.id
  json.name tag.name
  json.occurrences tag.occurrences
  json.notes tag.notes
end
