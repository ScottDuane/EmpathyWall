import { EventEmitter } from 'events';
import { receiveNotes } from '../actions/note_actions';
import { AppDispatcher } from '../dispatcher/dispatcher';
import { NOTES_RECEIVED,
         NOTE_RECEIVED,
         TOGGLE_ADD,
         TAGS_RECEIVED,
         TAG_RECEIVED } from '../constants/note_constants';

class NoteStore extends EventEmitter {
  constructor() {
    super();
    this.notes = [];
    this.filteredNotes = [];
    this.change_event = "change";
    this.addState = false;
    this.tags = [];
    this.notesHash = {};

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
          this.emit(this.change_event);
          break;
        case TAG_RECEIVED:
          this.tags.push([payload.tag]);
          this.emit(this.change_event);
          break;
      }
  };

  getAddState () {
    return this.addState;
  };

  getNotes() {
    return this.notes;
  };

  addChangeListener(callback) {
    this.on(this.change_event, callback);
  };

  removeChangeListener(callback) {
    this.removeListener(this.change_event, callback);
  };


};

export default NoteStore;
