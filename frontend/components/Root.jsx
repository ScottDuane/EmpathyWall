import { Router, Route, hashHistory }  from 'react-router';
import App from './App';
import NoteLongShow from './NoteLongShow';
import AddNote from './AddNote';

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