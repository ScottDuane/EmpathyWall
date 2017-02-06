import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';
import { createNote, toggleNoteAdd } from '../actions/note_actions';

class AddNote extends Component {
  constructor () {
    super();
    this.content = "";
    this.state = {visible: false };
  };

  componentDidMount () {
    this.props.noteStore.addChangeListener(this.onChange.bind(this));
  };

  componentWillUnmount () {
    this.props.noteStore.removeChangeListener(this.onChange.bind(this));
  };

  onChange () {
    this.setState( { visible: this.props.noteStore.getAddState() });
  };

  changeContent (input) {
    this.content = input;
  };

  toggleAdd () {
    let newAddState = !this.state.visible;
    toggleNoteAdd(newAddState);
  };
  
  saveNote () {
    const colorHash = { 0: "yellow",
                        1: "pink",
                        2: "blue",
                        3: "green",
                        4: "orange" };

    let randNum = (Math.random()*5)/5;

    createNote(this.content, colorHash[randNum]);
    toggleNoteAdd(false);
  };

  render () {
    let that = this;
    let klass = this.state.visible ? "add-modal-wrapper" : "invisible";
    return <div className={klass}>

      <div className="add-modal-background" onClick={this.toggleAdd.bind(this)}></div>
      <div className="add-note-modal">
        <h4>What do you want to say?</h4>
        <ReactQuill  theme="snow"
                     value={that.content}
                     onChange={this.changeContent.bind(this)}
                     placeholder="Type your note here..."
                     className="note-content-input"/>
                   <button className="save-button" onClick={this.saveNote.bind(this)}>Save Note</button>
      </div>
    </div>;
  };
};

export default AddNote;
