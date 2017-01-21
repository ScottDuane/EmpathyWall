export const RECEIVE_NOTES = "RECEIVE_NOTES";

export const fetchAllNotes = () => {
  NoteAPIUtil.fetchNotes().then((notes) => { dispatch(receiveNotes(notes)); });
};

