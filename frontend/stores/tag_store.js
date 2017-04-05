import { EventEmitter } from 'events';
import { receiveTags } from '../actions/tag_actions';
import { AppDispatcher } from '../dispatcher/dispatcher';
import { TAGS_RECEIVED, TAG_RECEIVED, SEARCH_TAGS, ADD_NEW_TAG } from '../constants/tag_constants';

class TagStore extends EventEmitter {
  constructor() {
    super();
    this.tags = [];
    this.tagNames = [];
    this.selectedTags = [];
    this.suggestedTag = "";
    this.tentativeTags = [];
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
      case ADD_NEW_TAG:
        this.addTentativeTag(payload.tagName);
        this.emit(this.change_event);
        break;
    };
  };

  addTentativeTag (tagName) {
    let foundTag = null;

    this.tags.forEach((tag) => {
      if (tag.name === tagName) {
        foundTag = tag;
      }
    });

    if (foundTag) {
      this.tentativeTags.push(foundTag);
    } else {
      this.tentativeTags.push(tagName);
    }
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

  searchTags (query, tags) {
    console.log("query is " + query);
    console.log("tags are " + tags);
    if (tags.length === 0 || query === "") {
      this.suggestedTag =  "";
      return this.suggestedTag;
    }
     else if (tags.length === 1) {
       this.suggestedTag = this.isPartialMatch(tags[0], query) ? tags[0] : "";
       return this.suggestedTag;
     }

    let midIdx = Math.floor(tags.length/2);

    if (this.isPartialMatch(query, tags[midIdx])) {
      this.suggestedTag = tags[midIdx];
    } else {
      if (this.isLessThan(tags[midIdx], query)) {
        return this.searchTags(query, tags.slice(midIdx+1));
      } else {
        return this.searchTags(query, tags.slice(0, midIdx));
      }
    }
  };

  isPartialMatch(str1, str2) {
    let chars1 = str1.split("");
    let chars2 = str2.split("");
    let idx = 0;
    while (idx < chars1.length && idx < chars2.length) {
      if (chars1[idx] !== chars2[idx]) {
        return false;
      } else {
        idx += 1;
      }
    }

    return true;
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

  getTentativeTags () {
    return this.tentativeTags;
  };

  addChangeListener(callback) {
    this.on(this.change_event, callback);
  };

  removeChangeListener(callback) {
    this.removeListener(this.change_event, callback);
  };
};

export default TagStore;
