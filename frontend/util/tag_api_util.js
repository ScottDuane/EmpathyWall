
export const fetchTags = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/tags'
  });
};

export const createNewTag = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/tags',
    data: data
  });
}
