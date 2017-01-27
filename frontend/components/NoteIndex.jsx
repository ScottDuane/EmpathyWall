import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { fetchAllNotes } from '../actions/note_actions';
import NoteStore from '../stores/note_store';

class NoteIndex extends React.Component {
  constructor () {
    super();
    fetchAllNotes();
    this.noteStore = new NoteStore();
    this.state = { notes: this.noteStore.getNotes() };
  };

  componentDidMount () {
    console.log("looky i mounted");
    this.noteStore.addChangeListener(this.onChange.bind(this));
  };

  componentWillUnmount () {
    this.noteStore.removeChangeListener(this.onChange.bind(this));
  };

  onChange () {
    this.setState({ notes: this.noteStore.getNotes() })
  };

  render () {
    debugger;
    return <ul>{this.state.notes.map( (note) => {
        return <li>{note.content}</li>
      })
    }</ul>;
  };
};

export default NoteIndex;