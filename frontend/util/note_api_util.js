

export const fetchNotes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/notes/'
  });
};


export const createNewNote = (data, tags) => {
  
  return $.ajax({
    method: 'POST',
    url: 'api/notes',
    data: data
  });

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
