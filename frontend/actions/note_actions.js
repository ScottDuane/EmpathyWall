import { fetchNotes, fetchNoteById, createNewNote, createNewMatch, fetchTags, fetchMatches } from '../util/note_api_util';
import { createNewTag, fetchTagById } from '../util/tag_api_util';
import { AppDispatcher } from '../dispatcher/dispatcher';
import { NOTES_RECEIVED, NOTE_RECEIVED, TOGGLE_ADD, TAGS_RECEIVED, SEARCH_NOTES, FILTER_RECEIVED, SEARCH_TAGS } from '../constants/note_constants';


export const fetchAllNotes = () => {
  fetchNotes().then((data) => { AppDispatcher.dispatch(receiveNotes(data.notes)); });
};

export const createNoteWithTags = (content, tags, color) => {
  let promise = createNewNote( { note: { content: content, color: color }});

  promise.then((noteData) => {

    tags.forEach((tag) => {
      let tagId = null;
      if (typeof(tag) == "string") {
        debugger;
        createNewTag( { tag: { name: tag, occurrences: 1 } } ).then((tagData) => {
          createNewMatch( { note_tag: { note_id: noteData.note.id, tag_id: tagData.tag.id } }).then((match) => {
            fetchNoteById(match.note_id).then((note) => { AppDispatcher.dispatch(receiveNote(note)); } );
            fetchTagById(match.tag_id).then((tag) => { AppDispatcher.dispatch(receiveTag(tag)); } );
          });
        });
      } else {
        debugger;
        createNewMatch( { note_tag: { note_id: noteData.note.id, tag_id: tag.id } }).then((matchData) => {
          fetchNoteById(matchData.match.note_id).then((note) => { AppDispatcher.dispatch(receiveNote(note)); } );
          fetchTagById(matchData.match.tag_id).then((tag) => { AppDispatcher.dispatch(receiveTag(tag)); } );
        });
      }
    });
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

export const receiveTag = (tag) => {
  return { actionType: TAG_RECEIVED,
          tag: tag };
};
