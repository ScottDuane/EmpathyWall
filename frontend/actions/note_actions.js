import { fetchNotes, createNewNote } from '../util/note_api_util';
import { AppDispatcher } from '../dispatcher/dispatcher';
import { NOTES_RECEIVED, NOTE_RECEIVED, TOGGLE_ADD } from '../constants/note_constants';


export const fetchAllNotes = () => {
  fetchNotes().then((data) => { AppDispatcher.dispatch(receiveNotes(data.notes)); });
};

export const createNote = (content, color) => {
  createNewNote({note:  { content: content, color: color } } ).then((data) => { AppDispatcher.dispatch(receiveNote(data.note)); });
};

export const toggleNoteAdd = (addState) => {
  let payload = { actionType: TOGGLE_ADD,
    addState: addState };
  AppDispatcher.dispatch(payload);
};

export const receiveNotes = (notes) => {
  return { actionType: NOTES_RECEIVED,
          notes: notes };
};

export const receiveNote = (note) => {
  return { actionType: NOTE_RECEIVED,
            note: note };
};
