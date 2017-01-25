import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { fetchAllNotes } from '../actions/note_actions';

class NoteIndex extends React.Component {
  constructor () {
    super();
    this.state = { notes: fetchAllNotes() };
  };

  render () {
    return <div>This will be a bunch of notes!</div>;
  };
};

export default NoteIndex;