import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NoteFilters from './NoteFilters';
import AddNote from './AddNote';
import { toggleNoteAdd, searchNotes } from '../actions/note_actions';
import { toggleAddHover } from '../actions/alert_actions';

class IndexHeader extends React.Component {
  constructor () {
    super();
    this.searchQuery = "";
    this.state = { addVisible: false, addHover: false };
  };

  componentDidMount () {
    this.props.noteStore.addChangeListener(this.onChange.bind(this));
    this.props.alertStore.addChangeListener(this.onChange.bind(this));
  };

  componentWillUnmount () {
    this.props.noteStore.removeChangeListener(this.onChange.bind(this));
  };

  onChange() {
    let newAddState = this.props.noteStore.getAddState();
    let newHoverState = this.props.alertStore.getAddHoverState();
    this.setState( { addVisible: newAddState, addHover: newHoverState });
  };

  toggleAdd () {
    toggleNoteAdd(!this.state.addVisible);
  };

  toggleAddButtonHover () {
    toggleAddHover();
  };

  updateSearch (e) {
    this.searchQuery = e.target.value;
    searchNotes(this.searchQuery);
  };

  render () {
    let that = this;
    let unhoverClass = this.state.addHover ? "invisible" : "add-note-button";
    let hoverClass = this.state.addHover ? "add-note-button" : "invisible";

    return <div>
      <h1>Empathy Wall</h1>
      <div className="input-wrapper">
        <button className={hoverClass} onMouseLeave={this.toggleAddButtonHover.bind(this)} onClick={this.toggleAdd.bind(this)}><img className="add-icon" src="images/black_note.svg" /></button>
        <button className={unhoverClass} onMouseEnter={this.toggleAddButtonHover.bind(this)} onClick={this.toggleAdd.bind(this)}><img className="add-icon" src="images/grey_note.svg" /></button>
        <input type="text" className="search-bar" default="Search..." placeholder="Search..." onChange={this.updateSearch.bind(this)} />
      </div>
    </div>
  }
};

export default IndexHeader;
