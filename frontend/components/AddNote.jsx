import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';
import { createNote } from '../actions/note_actions';

class AddNote extends Component {
  constructor () {
    super();
    this.content = "";
  };

  changeContent (input) {
    this.content = input;
  };

  saveNote () {
    createNote(this.content);
    this.props.parent.toggleAdd();
  };

  render () {
    let that = this;
    return <div>
      <h4>What do you want to say?</h4>
      <ReactQuill  theme="snow"
                   value={that.content}
                   onChange={this.changeContent.bind(this)}
                   placeholder="Type your note here..."
                   className="note-content-input"/>
                 <button className="save-button" onClick={this.saveNote.bind(this)}>Save Note</button>
    </div>;
  };
};

export default AddNote;