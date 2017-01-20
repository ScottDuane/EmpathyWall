import { Router, Route, hashHistory }  from 'react-router';
import App from './App';
import NoteLongShow from './NoteLongShow';
import AddNote from './AddNote';
import React from 'react';

const Root = () => {
  return (
    <Router history={hashHistory} >
      <Route path="/" component={App}>
        <Route path="/notes/:noteId" component={NoteLongShow} />
        <Route path="/notes/new" component={AddNote} />
      </Route>
    </Router>
  );
};

export default Root;