import React from 'react';
import { filterNotesByTag } from '../actions/note_actions';

class NoteShortShow extends React.Component {
  filterByTag (e) {
    filterNotesByTag(e.target.innerText);
  };

  render () {
    let that = this;
    return <li key={this.props.note.id} className={this.props.klass}><hr />
              <span className="post-it-content">{this.props.note.content}</span>
              <ul className="short-show-tag-list">
                {that.props.tags.map((tag, idx) => {
                  return <li key={idx} onClick={this.filterByTag.bind(this)} className="short-show-tag-item">{tag.name}</li>
                })}
              </ul>
          </li>
  };
};

export default NoteShortShow;
