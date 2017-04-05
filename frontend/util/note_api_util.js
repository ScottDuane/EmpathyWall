

export const fetchNotes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/notes/'
  });
};


export const createNewNote = (data, tags) => {
  let newNote = $.ajax({
    method: 'POST',
    url: 'api/notes',
    data: data
  });

  let results = { newNote: newNote, tags: tags };
  return results;
};

export const createTag = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/tags',
    data: data
  });
};

export const createMatch = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/note_tags',
    data: data
  });
};
