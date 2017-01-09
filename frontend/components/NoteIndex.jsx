import React from 'react';
import NoteShortShow from './NoteShortShow';

const NoteIndex = () => {
  let aNote = { "content": "This is some notey note content"};
  return (
    <NoteShortShow note={aNote} />
  );
};

export default NoteIndex;
