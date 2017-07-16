import React from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Github from './Github/Github';
import Todos from './Todos/Todos';

// eslint-disable-next-line arrow-body-style
const App = observer(({ todoStore, githubStore }) => {
    return (
        <div className="app-container">
            <Todos todoStore={todoStore} />
            <Github githubStore={githubStore} todoStore={todoStore}/>
            <DevTools />
        </div>
    );
});

export default App;
