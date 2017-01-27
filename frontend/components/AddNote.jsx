import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';
import { createNote } from '../util/note_api_util';

class AddNote extends Component {
  constructor () {
    super();
    this.content = "";
  };

  changeContent (input) {
    this.content = input;
  };

  saveNote () {
    createNote(input);
    this.parent.toggleAdd();
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
                 <button className="save-button" onClick={that.saveNote}>Save Note</button>
    </div>;
  };
};

export default AddNote;