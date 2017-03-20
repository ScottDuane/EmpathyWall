import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NoteFilters from './NoteFilters';
import AddNote from './AddNote';
import { toggleNoteAdd } from '../actions/note_actions';

class IndexHeader extends React.Component {
  constructor () {
    super();
    this.state = { addVisible: false };
  };

  componentDidMount () {
    this.props.noteStore.addChangeListener(this.onChange.bind(this));
  };

  componentWillUnmount () {
    this.props.noteStore.removeChangeListener(this.onChange.bind(this));
  };

  onChange() {
    let newAddState = this.props.noteStore.getAddState();
    this.setState( { addVisible: newAddState });
  };

  toggleAdd () {
    toggleNoteAdd(!this.state.addVisible);
  };

  render () {
    let that = this;
    let klass = this.state.addVisible ? "add-note-button" : "add-note-button add-note-wrapper";
    return <div>
      <h1>Empathy Wall</h1>
      <div className="input-wrapper">

        <button className={klass} onClick={this.toggleAdd.bind(this)}><img src="assets/pencil.svg" /></button>
        <input type="text" className="search-bar" />
      </div>
    </div>
  }
};

export default IndexHeader;
