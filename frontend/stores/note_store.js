import { EventEmitter } from 'events';
import { receiveNotes } from '../actions/note_actions';
import { AppDispatcher } from '../dispatcher/dispatcher';
import { NOTES_RECEIVED,
         NOTE_RECEIVED,
         TOGGLE_ADD,
         SEARCH_NOTES,
        FILTER_RECEIVED  } from '../constants/note_constants';
import { TAGS_RECEIVED,
         TAG_RECEIVED } from '../constants/tag_constants';
import Fuse from 'fuse.js';

class NoteStore extends EventEmitter {
  constructor() {
    super();
    this.notes = [];
    this.filteredNotes = [];
    this.change_event = "change";
    this.addState = false;
    this.tags = [];
    this.tagNames = [];
    this.notesHash = {};
    this.searchQuery = "";
    this.filteredByTag = false;
    this.fuseOptions = {
                         shouldSort: true,
                         threshold: 0.6,
                         location: 0,
                         distance: 100,
                         maxPatternLength: 32,
                         minMatchCharLength: 3,
                         keys: [ "content", "tags.name"]
                       };

    AppDispatcher.register( (payload) => {
      this.updateStore(payload);
    });
  };

  updateStore(payload) {
      switch (payload.actionType) {
        case NOTES_RECEIVED:
          this.notes = payload.notes;
          this.emit(this.change_event);
          break;
        case NOTE_RECEIVED:
          this.notes.push(payload.note);
          this.emit(this.change_event);
          break;
        case TOGGLE_ADD:
          this.addState = payload.addState;
          this.emit(this.change_event);
          break;
        case TAGS_RECEIVED:
          this.tags = payload.tags;
          this.tagNames = Object.keys(payload.tags);
          this.emit(this.change_event);
          break;
        case TAG_RECEIVED:
          this.addTagToStore(payload.tag);
          this.tags.push([payload.tag]);
          this.emit(this.change_event);
          break;
        case SEARCH_NOTES:
          this.searchNotes(payload.query);
          this.emit(this.change_event);
          break;
        case FILTER_RECEIVED:
          this.filterNotesByTag(payload.tag);
          this.emit(this.change_event);
          break;
      }
  };

  addTagToStore(newTag) {
    this.tags.forEach((tag, idx) => {
      if (tag.id === newTag.id) {
        this.tags.splice(idx, newTag);
      }
    });
  };

  addNoteToStore(newNote) {
    this.notes.forEach((note, idx) => {
      if (note.id === newNote.id) {
        this.notes.splice(idx, newTag);
      }
    });
  };
  
  filterNotesByTag(tagName) {
    let foundTag = null;
    this.tags.forEach((tag) => {
      if (tag.name === tagName) {
        foundTag = tag;
      }
    });
    this.filteredNotes = this.findNotesByTag(foundTag);
    this.filteredByTag = true;
  };

  findNotesByTag(tag) {
    let taggedNotes = [];
    this.notes.forEach((note) => {
      let tagNames = [];
      note.tags.forEach((tagObject) => {
        if (tagObject.name === tag.name) {
          taggedNotes.push(note);
        }
      });
    });

    return taggedNotes;
  };

  searchNotes(query) {
    this.searchQuery = query;
    let fuse = new Fuse(this.notes, this.fuseOptions);
    this.filteredNotes = fuse.search(query);
  };

  getAddState () {
    return this.addState;
  };

  getNotes() {
    if (this.searchQuery.length > 0 || this.filteredByTag){
      return this.filteredNotes;
    } else {
      return this.notes;
    }
  };

  addChangeListener(callback) {
    this.on(this.change_event, callback);
  };

  removeChangeListener(callback) {
    this.removeListener(this.change_event, callback);
  };
};

export default NoteStore;
