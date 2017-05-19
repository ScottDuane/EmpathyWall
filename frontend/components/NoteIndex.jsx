import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { fetchAllNotes, fetchAllMatches } from '../actions/note_actions';
import { fetchAllTags } from '../actions/tag_actions';
import NoteShortShow from './NoteShortShow';
import Masonry from 'react-masonry-component';

class NoteIndex extends React.Component {
  constructor () {
    super();
    fetchAllNotes();
    fetchAllTags();
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
    let that = this;
    let listItems = this.state.notes.map( (note) => {
            let sizeMeasure = Math.floor(note.content.length/50);
            let heightClass = "list-item-note ";
            switch (sizeMeasure) {
              case 0:
                heightClass += " list-item-note-1";
                break;
              case 1:
                heightClass += " list-item-note-2";
                break;
              case 2:
                heightClass += " list-item-note-3";
                break;
              default:
                heightClass += " list-item-note-2";
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

            return <NoteShortShow klass={heightClass} note={note} key={note.id} tags={note.tags} />
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
