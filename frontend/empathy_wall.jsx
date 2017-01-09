import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<App />, root);
});
