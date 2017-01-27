import { EventEmitter } from 'events';
import { receiveNotes } from '../actions/note_actions';
import { AppDispatcher } from '../dispatcher/dispatcher';
import { NOTES_RECEIVED, NOTE_RECEIVED } from '../constants/note_constants';

class NoteStore extends EventEmitter {
  constructor() {
    super();
    this.notes = ["a notes or something"];
    this.filteredNotes = [];
    this.change_event = "change";

    AppDispatcher.register( (payload) => {
      this.updateStore(payload);
    });
  };

  updateStore(payload) {
      console.log("updating store");
      // debugger;
      switch (payload.actionType) {
        case NOTES_RECEIVED:
          this.notes = payload.notes;
          this.emit(this.change_event);
          break;
        case NOTE_RECEIVED:
          this.notes.push(payload.note);
          this.emit(this.change_event);
          break;
      }
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