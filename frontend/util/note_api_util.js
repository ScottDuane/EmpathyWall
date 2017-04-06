

export const fetchNotes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/notes/'
  });
};

export const fetchNoteById = (id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/notes/' + id
  });
};

export const createNewNote = (data, tags) => {
  return $.ajax({
      method: 'POST',
      url: 'api/notes',
      data: data,
      success: (result) => {
        debugger;
      }
    });
};

export const createNewMatch = (data) => {
  return $.ajax({
      method: 'POST',
      url: 'api/note_tags',
      data: data
  });

};
