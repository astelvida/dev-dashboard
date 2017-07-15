import React from 'react';
import ReactDOM from 'react-dom';
import githubStore from './stores/githubStore';
import App from './components/App';

ReactDOM.render(<App githubStore={githubStore}/>, document.getElementById('root'));
