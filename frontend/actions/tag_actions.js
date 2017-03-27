import { AppDispatcher } from '../dispatcher/dispatcher';
import { SEARCH_TAGS, TAGS_RECEIVED, TAG_RECEIVED } from '../constants/tag_constants';
import { fetchTags } from '../util/tag_api_util';


export const findSuggestedTag = (query) => {
  let payload = { actionType: SEARCH_TAGS,
          query: query };

  AppDispatcher.dispatch(payload);
};

export const fetchAllTags = () => {
  fetchTags().then((data) => { AppDispatcher.dispatch(receiveTags(data.tags)); });
};

export const receiveTags = (tags) => {
  return { actionType: TAGS_RECEIVED,
           tags: tags };
};
