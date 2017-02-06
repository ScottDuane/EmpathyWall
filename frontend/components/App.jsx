import React from 'react';
import Navbar from './Navbar';
import NoteFilters from './NoteFilters';
import NoteIndex from './NoteIndex';
import NoteStore from '../stores/note_store';
import IndexHeader from './IndexHeader';
import AddNote from './AddNote';

class App extends React.Component {
  constructor () {
    super();
    this.state = { addVisible: false };
    this.noteStore = new NoteStore();
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
        <Navbar noteStore={that.noteStore} />
        <IndexHeader noteStore={that.noteStore} />
        <NoteIndex noteStore={that.noteStore} />
        <AddNote noteStore={that.noteStore} />
      </div>
    );
  }
};

export default App;
