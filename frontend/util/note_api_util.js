

export const fetchNotes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/notes/',
    success: (data) => {
      // console.log("data of call " + data);
      
    }
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