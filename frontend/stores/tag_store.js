import { EventEmitter } from 'events';
import { receiveTags } from '../actions/tag_actions';
import { AppDispatcher } from '../dispatcher/dispatcher';
import { TAGS_RECEIVED, TAG_RECEIVED, SEARCH_TAGS } from '../constants/tag_constants';

class TagStore extends EventEmitter {
  constructor() {
    super();
    this.tags = [];
    this.tagNames = [];
    this.selectedTags = [];
    this.suggestedTag = "";
    this.change_event = "change";
    AppDispatcher.register( (payload) => {
      this.updateStore(payload);
    });
  };

  updateStore (payload) {
    switch (payload.actionType) {
      case TAGS_RECEIVED:
        this.handleTags(payload.tags);
        this.emit(this.change_event);
        break;
      case TAG_RECEIVED:
        this.tags.push(payload.tag);
        this.emit(this.change_event)
        break;
      case SEARCH_TAGS:
        this.searchTags(payload.query, this.tagNames);
        this.emit(this.change_event);
        break;
    };
  };

  handleTags (tags) {
    this.tags = tags;
    tags.forEach((tag) => {
      this.tagNames.push(tag.name);
    });

    this.tags.sort(function(tag1, tag2) {
      return tag1.occurrences - tag2.occurrences;
    });

    this.tagNames.sort();
  };

  searchTags(query, tags) {
    if (tags.length === 0 || query === "") {
      return "";
    }

    let midIdx = Math.floor(tags.length/2);
    let tagBegin = tags[midIdx].length <= query.length ? query : tags[midIdx];
    if (tagBegin === query) {
      console.log("match is " + tags[midIdx]);
      return tags[midIdx];
    } else {
      if (this.isLessThan(tagBegin, query)) {
        this.searchTags(query, tags.slice(midIdx));
      } else {
        this.searchTags(query, tags.slice(0, midIdx));
      }
    }
  };

  isLessThan(str1, str2) {
    let chars1 = str1.split("");
    let chars2 = str2.split("");
    let idx = 0;
    while (idx < chars1.length && idx < chars2.length) {
      if (chars1[idx] < chars2[idx]) {
        return true;
      } else if (chars1[idx] > chars2[idx]) {
        return false;
      } else {
        idx += 1;
      }
    };

    return chars1.length < chars2.length;
  };

  getSuggestedTag () {
    return this.suggestedTag;
  };

  addChangeListener(callback) {
    this.on(this.change_event, callback);
  };

  removeChangeListener(callback) {
    this.removeListener(this.change_event, callback);
  };
};

export default TagStore;
