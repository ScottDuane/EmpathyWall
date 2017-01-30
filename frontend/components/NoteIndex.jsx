import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { fetchAllNotes } from '../actions/note_actions';
import NoteStore from '../stores/note_store';
import NoteShortShow from './NoteShortShow';
import Masonry from 'react-masonry-component';
import Packery from 'packery';

class NoteIndex extends React.Component {
  constructor () {
    super();
    fetchAllNotes();
    this.noteStore = new NoteStore();
    this.state = { notes: this.noteStore.getNotes() };
  };

  componentDidMount () {
    this.noteStore.addChangeListener(this.onChange.bind(this));
  };

  componentWillUnmount () {
    this.noteStore.removeChangeListener(this.onChange.bind(this));
  };

  onChange () {
    this.setState({ notes: this.noteStore.getNotes() })
  };

  render () {
    let listItems = this.state.notes.map( (note) => {
            return <li key={note.id} className='list-item-note'><img src="http://image.shutterstock.com/z/stock-vector-angry-unicorn-296810093.jpg" /></li>
          });

    return <Masonry
      className={'note-grid'}
      elementType={'ul'}
       >
      {listItems}
  </Masonry>
  };
};

export default NoteIndex;
