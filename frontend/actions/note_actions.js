import { fetchNotes } from '../util/note_api_util';

export const RECEIVE_NOTES = "RECEIVE_NOTES";

export const fetchAllNotes = () => {
  fetchNotes().then((notes) => { dispatch(receiveNotes(notes)); });
};

export const receiveNotes = (notes) => {

};