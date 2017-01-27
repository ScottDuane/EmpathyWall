import React from 'react';
import Navbar from './Navbar';
import NoteFilters from './NoteFilters';
import NoteIndex from './NoteIndex';
import NoteStore from '../stores/note_store';

const App = () => {
  return (
    <div>
      <Navbar />
      <NoteFilters />
      <NoteIndex />
    </div>
  );
};

export default App;

