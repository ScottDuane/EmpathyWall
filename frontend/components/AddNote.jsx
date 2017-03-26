import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';
import { createNote, toggleNoteAdd } from '../actions/note_actions';

class AddNote extends Component {
  constructor () {
    super();
    this.content = "";
    this.state = {visible: false, tags: [] };
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

  changeContent (e) {
    this.content = e.target.value;
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
        <textarea className="note-content-input" default="Say it..." onChange={this.changeContent.bind(this)}></textarea>
        <div className="tag-container">
          <ul>
            {this.state.tags.map((tag) => {
              return <li className="tag-list-item">{tag.name}</li>
            })}
          </ul>
          <input type="text" className="next-tag-field" placeholder="Add a tag..." default="Add tag..." />
        </div>
        <button className="save-button" onClick={this.saveNote.bind(this)}>Save Note</button>
      </div>
    </div>;
  };
};

export default AddNote;
