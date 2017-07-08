import React from 'react';
import ReactDOM from 'react-dom';
import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

const App = observer(() => {
    return (
        <div>
           Hello
        </div>
    );
})

ReactDOM.render(<App />, document.getElementById('root'));