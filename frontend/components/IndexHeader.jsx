import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NoteFilters from './NoteFilters';
import AddNote from './AddNote';

class IndexHeader extends React.Component {
  constructor () {
    super();
    this.state = { addVisible: false };
  };

  toggleAdd () {
    this.setState({ addVisible: !this.state.addVisible });
  };

  render () {
    let visible = this.state.addVisible ? "" : "invisible";
    return <div>
      <h1>Empathy Wall</h1>
      <NoteFilters />
      <div className={visible}><AddNote /></div>
      <button onClick={this.toggleAdd.bind(this)}>Add a note</button>
    </div>
  }
};

export default IndexHeader;