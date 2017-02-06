import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { fetchAllNotes } from '../actions/note_actions';
import NoteShortShow from './NoteShortShow';
import Masonry from 'react-masonry-component';
import Packery from 'packery';

class NoteIndex extends React.Component {
  constructor () {
    super();
    fetchAllNotes();
    this.state = { notes: [], addVisible: false };
  };

  componentDidMount () {
    this.props.noteStore.addChangeListener(this.onChange.bind(this));
  };

  componentWillUnmount () {
    this.props.noteStore.removeChangeListener(this.onChange.bind(this));
  };

  onChange () {
    this.setState({ notes: this.props.noteStore.getNotes(), addVisible: this.props.noteStore.getAddState() })
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

            switch (note.color) {
              case "yellow":
                heightClass += " list-item-yellow";
                break;
              case "pink":
                heightClass += " list-item-pink";
                break;
              case "blue":
                heightClass += " list-item-blue";
                break;
              case "green":
                heightClass += " list-item-green";
                break;
              case "orange":
                heightClass += " list-item-orange";
                break;
              default:
                heightClass += " list-item-yellow";
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
