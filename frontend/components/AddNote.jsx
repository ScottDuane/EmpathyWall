import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';
import { createNoteWithTags, toggleNoteAdd, createMatches } from '../actions/note_actions';
import { findSuggestedTag } from '../actions/tag_actions';

class AddNote extends Component {
  constructor () {
    super();
    this.content = "";
    this.state = {content: "", visible: false, tags: [], suggestedTag: "", partialTag: "", charsLeft: 150 };
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
    if (this.state.charsLeft > 0) {
      let newCharsLeft = 200 - e.target.value.length;
      this.setState({ content: e.target.value, charsLeft: newCharsLeft });
    } else {
      e.preventDefault();
    }
  };

  toggleAdd () {
    let newAddState = !this.state.visible;

    if (this.state.visible) {
      this.content = "";
      this.setState( { content: "", tags: [], suggestedTag: "", partialTag: "", charsLeft: 150 });
    }

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
    toggleNoteAdd(false);
  };

  handleTagStroke (e) {
    if (e.keyCode == 9 || e.keyCode == 13) {
      e.preventDefault();
      if (this.state.tags.includes(e.target.value)) {
        this.setState( { partialTag: "", suggestedTag: "" });
      } else {
        let newTagName = this.state.suggestedTag.length > 0 ? this.state.suggestedTag : e.target.value;
        this.props.tagStore.addTentativeTag(newTagName);
        let newTags = this.state.tags.slice(0);
        newTags.push(newTagName);
        this.setState( { tags: newTags, suggestedTag: "", partialTag: "" });
      }
    }
  };

  handleTagChange (e) {
    let query = e.target.value;

    if (query.length > 0) {
      findSuggestedTag(query);
      this.setState( { partialTag: query });
    } else {
      this.setState( { partialTag: query, suggestedTag: "" });
    }
  };

  testClick () {
    console.log("clicked!");
  };

  render () {
    let that = this;
    let klass = this.state.visible ? "add-modal-wrapper" : "invisible";
    let newTagClass = this.state.tags.length > 7 ? "invisible" : "next-tag-field";
    return <div className={klass}>
      <button className="add-close-button" onClick={this.toggleAdd.bind(this)}><img className="close-button-image" src="images/cancel-button.svg" /></button>
      <div className="add-note-modal">

        <h2 className="add-note-header"></h2>
        <textarea className="note-content-input" value={this.state.content} onChange={this.changeContent.bind(this)}></textarea>
        <div className="chars-left-container">
          <span className="chars-left">Characters left: {this.state.charsLeft}</span>
        </div>
        <div className="tag-container">
          <ul className="existing-tag-list">
            {this.state.tags.map((tag) => {
              return <li className="tag-list-item">{tag}</li>
            })}
          </ul>
          <div className="new-tag-container">
            <input type="text" className={newTagClass} onKeyDown={this.handleTagStroke.bind(this)} onChange={this.handleTagChange.bind(this)} placeholder="Add a tag..." value={this.state.partialTag} />
            <span className="suggested-tag-start">{this.state.suggestedTag}</span>
          </div>
        </div>
        <button className="save-button" onClick={this.saveNote.bind(this)}>Save</button>
      </div>
    </div>;
  };
};

export default AddNote;
