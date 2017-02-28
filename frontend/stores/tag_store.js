import { EventEmitter } from 'events';
import { receiveTags } from '../actions/note_actions';
import { AppDispatcher } from '../dispatcher/dispatcher';
import { TAGS_RECEIVED, TAG_RECEIVED } from '../constants/note_constants';

class TagStore extends EventEmitter {
  constructor() {
    super();
    this.tags = [];
    this.selectedTags = [];
    this.change_event = "change";
    AppDispatcher.register( (payload) => {
      this.updateStore(payload);
    });
  };

  updateStore (payload) {
    switch (payload.actionType) {
      case TAGS_RECEIVED:
        this.tags = payload.tags;
        this.sortTags();
        break;
      case TAG_RECEIVED:
        this.tags.push(payload.tag);
        break;
    };
  };

  sortTags () {
    this.tags.sortBy((tag) => {
      return tag.occurrences;
    });

    this.tags.sortBy((tag) => {
      return tag.name;
    });
  };

  // go through join table to create a JSON object that takes the id of the note as its key
  // values are arrays of strings -- tag.name
  getMatchedTags () {
    return this.tags;
  };

  addChangeListener(callback) {
    this.on(this.change_event, callback);
  };

  removeChangeListener(callback) {
    this.removeListener(this.change_event, callback);
  };
};

export default TagStore;
