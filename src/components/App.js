import React from 'react';
import { observer } from 'mobx-react';

import DevTools from 'mobx-react-devtools';
import GithubData from './Github/GithubData';

const App = observer(({ githubStore }) => {
    console.log('STORE');
    return (
        <div>
            <GithubData githubStore={githubStore} />
            <DevTools />
        </div>
    );
});

export default App;
