import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';
import { createNoteWithTags, toggleNoteAdd, createMatches } from '../actions/note_actions';
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

    let randNum = Math.floor(Math.random()*5);

    createNoteWithTags(this.content, this.props.tagStore.getTentativeTags(), colorHash[randNum]);
    // still need to create the matches
    toggleNoteAdd(false);
  };

  handleTagStroke (e) {
    if (e.keyCode == 9 || e.keyCode == 13) {
      e.preventDefault();
      if (this.state.tags.includes(e.target.value)) {
        this.setState( { partialTag: "", suggestedTag: "" });
      } else {
        let newTags = this.state.tags.slice(0);
        newTags.push(e.target.value);
        this.setState( { tags: newTags, suggestedTag: "" });
      }
    }
  };

  handleTagChange (e) {
    let query = e.target.value;
    this.setState( { partialTag: query });
    if (query.length > 0) {
      findSuggestedTag(query);
    }
  };

  render () {
    let that = this;

    let klass = this.state.visible ? "add-modal-wrapper" : "invisible";
    let newTagClass = this.state.tags.length > 7 ? "invisible" : "next-tag-field";
    let suggestedTag = this.state.suggestedTag ? this.state.suggestedTag : "Add a tag...";
    let suggestedEnd = suggestedTag.slice(that.state.partialTag.length);
    return <div className={klass}>

      <div className="add-modal-background" onClick={this.toggleAdd.bind(this)}></div>
      <div className="add-note-modal">
        <h2 className="add-note-header">Share some kind words</h2>
        <textarea className="note-content-input" default="Say it..." onChange={this.changeContent.bind(this)}></textarea>
        <div className="tag-container">
          <ul className="existing-tag-list">
            {this.state.tags.map((tag) => {
              return <li className="tag-list-item">{tag}</li>
            })}
          </ul>
          <div className="new-tag-container">
            <input type="text" className={newTagClass} onKeyDown={this.handleTagStroke.bind(this)} onChange={this.handleTagChange.bind(this)} placeholder="Add a tag..." default={this.state.partialTag} />
            <span className="suggested-tag-start">{this.state.suggestedTag}</span>
          </div>
        </div>
        <button className="save-button" onClick={this.saveNote.bind(this)}>Save</button>
      </div>
    </div>;
  };
};

export default AddNote;
