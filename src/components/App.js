import React from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Github from './Github/Github';
import Todos from './Todos/Todos';

// eslint-disable-next-line arrow-body-style
const App = observer(({ stores }) => {
    return (
        <div className="app-container">
            <Todos todoStore={stores.todoStore} />
            <Github githubStore={stores.githubStore} todoStore={stores.todoStore}/>
            <DevTools />
        </div>
    );
});

export default App;
