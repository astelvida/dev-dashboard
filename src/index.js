import React from 'react';
import ReactDOM from 'react-dom';
import githubStore from './stores/githubStore';
import todoStore from './stores/todoStore';
import App from './components/App';

import styles from './styles/layout.css';

ReactDOM.render(
    <App
        todoStore={todoStore}
        githubStore={githubStore}
    />,
    document.getElementById('root')
);

