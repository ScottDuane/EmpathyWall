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
            let randNum1 = Math.floor(Math.random()*3);
            let heightClass = "list-item-note ";
            switch (randNum1) {
              case 0:
                heightClass += " list-item-note-1";
                break;
              case 1:
                heightClass += " list-item-note-2";
                break;
              case 2:
                heightClass += " list-item-note-3";
                break;
            };

            let randNum2 = Math.floor(Math.random()*3);
            switch (randNum2) {
              case 0:
                heightClass += " list-item-yellow";
                break;
              case 1:
                heightClass += " list-item-pink";
                break;
              case 2:
                heightClass += " list-item-blue";
                break;
            };
            return <li key={note.id} className={heightClass}><hr /><span className="post-it-content">{note.content}</span></li>
          });

    let masonryOptions = {};
    return <Masonry
      className={'note-grid'}
      elementType={'ul'}
      options={masonryOptions}
       >
      {listItems}
  </Masonry>
  };
};

export default NoteIndex;
