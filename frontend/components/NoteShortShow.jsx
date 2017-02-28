import React from 'react';

class NoteShortShow extends React.Component {
  render () {
    return <li className={this.props.klass}><hr />
              <span className="post-it-content">{this.props.note.content}</span>
              <ul className="short-show-tag-list">
                {this.props.tags.map((tag) => {
                  return <li className="short-show-tag-item">{tag}</li>
                })}
              </ul>
          </li>
  };
};

export default NoteShortShow;
