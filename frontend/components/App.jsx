import React from 'react';
import Navbar from './Navbar';
import NoteFilters from './NoteFilters';
import NoteIndex from './NoteIndex';
import NoteStore from '../stores/note_store';
import TagStore from '../stores/tag_store';
import AlertStore from '../stores/alert_store';
import IndexHeader from './IndexHeader';
import AddNote from './AddNote';


class App extends React.Component {
  constructor () {
    super();
    this.state = { addVisible: false };
    this.noteStore = new NoteStore();
    this.alertStore = new AlertStore();
    this.tagStore = new TagStore();
  };
  //
  toggleAdd () {
    let currentState = this.state.addVisible;
    let nextState = !currentState;
    this.setState( (child, nextState) => {
      return { visible: nextState };
    });
    this.forceUpdate(child.toggleSelf);
  };

  render () {
    let that = this;
    let fauxKlass = this.state.addVisible ? "add-modal-wrapper" : "invisible";
    return (
      <div>
        <Navbar noteStore={that.noteStore} tagStore={that.tagStore} alertStore={that.alertStore} />
        <IndexHeader noteStore={that.noteStore} tagStore={that.tagStore} alertStore={that.alertStore} />
        <NoteIndex noteStore={that.noteStore} tagStore={that.tagStore} alertStore={that.alertStore} />
        <AddNote noteStore={that.noteStore} tagStore={that.tagStore} alertStore={that.alertStore} />
      </div>
    );
  }
};

export default App;
