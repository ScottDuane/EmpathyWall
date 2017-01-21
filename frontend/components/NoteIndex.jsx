import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NoteIndex extends Component {
  getInitialState () {
    NoteActions.fetchAllNotes();
  };
  componentDidMount () {

  };

  render () {
    return <div>This will be a bunch of notes!</div>;
  };
};

export default NoteIndex;