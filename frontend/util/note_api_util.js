

export const fetchNotes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/notes/'
  });
};

export const createNote = (data) => {
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