

export const fetchNotes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/notes/'
  });
};

export const createNewNote = (data, tags) => {
  return (data, tags) => {
    let newNote = $.ajax({
      method: 'POST',
      url: 'api/notes',
      data: data
    });

    return [newNote, tags];
  };
};

export const createNewMatch = (data) => {
  return (data, newNote) => {
    let newMatch = $.ajax({
      method: 'POST',
      url: 'api/note_tags',
      data: data
    });

    return [newMatch, newNote];
  };
};
