
export const fetchTags = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/tags'
  });
};

export const fetchTagById = (id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/tags' + id
  });
};

export const createNewTag = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/tags',
    data: data
  });
}
