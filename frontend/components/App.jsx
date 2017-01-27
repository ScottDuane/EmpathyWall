import React from 'react';
import Navbar from './Navbar';
import NoteFilters from './NoteFilters';
import NoteIndex from './NoteIndex';
import NoteStore from '../stores/note_store';
import IndexHeader from './IndexHeader';

const App = () => {
  return (
    <div>
      <Navbar />
      <IndexHeader />
      <NoteIndex />
    </div>
  );
};

export default App;

