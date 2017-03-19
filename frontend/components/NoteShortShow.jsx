import React from 'react';

class NoteShortShow extends React.Component {
  render () {
    return <li key={this.props.note.id} className={this.props.klass}><hr />
              <span className="post-it-content">{this.props.note.content}</span>
              <ul className="short-show-tag-list">
                {this.props.tags.map((tag, idx) => {
                  return <li key={idx} className="short-show-tag-item">{tag.name}</li>
                })}
              </ul>
          </li>
  };
};

export default NoteShortShow;
