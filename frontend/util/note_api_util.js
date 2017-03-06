

export const fetchNotes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/notes/',
    success: (data) => {
      // console.log("data of call " + data);

    }
  });
};

export const fetchTags = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/tags'
  });
};

export const fetchMatches = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/note_tags',
    success: (data) => {
      debugger;
    },
    error: (err) => {
      debugger;
    }
  });
};

export const createNewNote = (data) => {
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
