import { fetchNotes, createNewNote } from '../util/note_api_util';
import { AppDispatcher } from '../dispatcher/dispatcher';
import { NOTES_RECEIVED, NOTE_RECEIVED } from '../constants/note_constants';

export const RECEIVE_NOTES = "RECEIVE_NOTES";

export const fetchAllNotes = () => {
  fetchNotes().then((data) => { AppDispatcher.dispatch(receiveNotes(data.notes)); });
};

export const createNote = (content) => {
  createNewNote({note:  { content: content } } ).then((data) => { AppDispatcher.dispatch(receiveNote(data.note)); });
};

export const receiveNotes = (notes) => {
  return { actionType: NOTES_RECEIVED,
          notes: notes };
};

export const receiveNote = (note) => {
  return { actionType: NOTE_RECEIVED,
            note: note };
};