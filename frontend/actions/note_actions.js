import { fetchNotes, createNewNote, fetchTags, fetchMatches } from '../util/note_api_util';
import { AppDispatcher } from '../dispatcher/dispatcher';
import { NOTES_RECEIVED, NOTE_RECEIVED, TOGGLE_ADD, TAGS_RECEIVED, SEARCH_NOTES, FILTER_RECEIVED, SEARCH_TAGS } from '../constants/note_constants';


export const fetchAllNotes = () => {
  fetchNotes().then((data) => { AppDispatcher.dispatch(receiveNotes(data.notes)); });
};

export const createNoteWithTags = (content, tags, color) => {
  console.log("color is "+color);
  let newNote = createNewNote( { note: { content: content, color: color } } );
  tags.forEach((tag) => {
    let tagId = null;
    if (typeof(tag) == "string") {
      let newTag = createNewTag( { name: tag, occurrences: 1 } );
      tagId = newTag.id;
    } else {
      tagId = tag.id;
    }
    createMatch({ note_id: newNote.id, tag_id: tagId })
  });

};

export const createNote = (content, color) => {
  createNewNote({note:  { content: content, color: color } }, tags ).then((data) => { AppDispatcher.dispatch(receiveNote(data.note)); });
};

export const createMatches = (note, tags) => {
  tags.forEach((tag) => {
    createMatch({ note_id: note.id, tag_id: tag.id });
  });
};

export const toggleNoteAdd = (addState) => {
  let payload = { actionType: TOGGLE_ADD,
    addState: addState };
  AppDispatcher.dispatch(payload);
};

export const searchNotes = (query) => {
  let payload = { actionType: SEARCH_NOTES, query: query };
  AppDispatcher.dispatch(payload);
};

export const filterNotesByTag = (tag) => {
  let payload = { actionType: FILTER_RECEIVED, tag: tag };
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
