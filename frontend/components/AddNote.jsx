import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';
import { createNote, toggleNoteAdd } from '../actions/note_actions';
import { findSuggestedTag } from '../actions/tag_actions';

class AddNote extends Component {
  constructor () {
    super();
    this.content = "";
    this.state = {visible: false, tags: [], suggestedTag: "", partialTag: "" };
  };

  componentDidMount () {
    this.props.noteStore.addChangeListener(this.onChange.bind(this));
    this.props.tagStore.addChangeListener(this.onChange.bind(this));
  };

  componentWillUnmount () {
    this.props.noteStore.removeChangeListener(this.onChange.bind(this));
    this.props.tagStore.removeChangeListener(this.onChange.bind(this));
  };

  onChange () {
    this.setState( { visible: this.props.noteStore.getAddState(), suggestedTag: this.props.tagStore.getSuggestedTag() });
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

  handleTagStroke (e) {
    if (e.keyCode == 9 || e.keyCode == 13) {
      e.preventDefault();
      let newTags = this.state.tags.slice(0);
      newTags.push(e.target.value);
      this.setState( { tags: newTags, suggestedTag: "" });
    } else {
      this.setState( { partialTag: e.target.value });
      findSuggestedTag(e.target.value);
    }
  };

  render () {
    let that = this;
    console.log("suggested tag " + this.state.suggestedTag);
    let klass = this.state.visible ? "add-modal-wrapper" : "invisible";
    let suggestedTag = this.state.suggestedTag ? this.state.suggestedTag : "Add a tag...";
    return <div className={klass}>

      <div className="add-modal-background" onClick={this.toggleAdd.bind(this)}></div>
      <div className="add-note-modal">
        <textarea className="note-content-input" default="Say it..." onChange={this.changeContent.bind(this)}></textarea>
        <hr />
        <div className="tag-container">
          <ul>
            {this.state.tags.map((tag) => {
              return <li className="tag-list-item">{tag.name}</li>
            })}
          </ul>
          <div className="new-tag-container">
            <input type="text" className="next-tag-field" onKeyDown={this.handleTagStroke.bind(this)} placeholder="Add a tag..." default={this.state.partialTag} />
            <span className="suggested-tag-ending">{this.state.suggestedTag}</span>
          </div>
        </div>
        <button className="save-button" onClick={this.saveNote.bind(this)}>Save Note</button>
      </div>
    </div>;
  };
};

export default AddNote;
