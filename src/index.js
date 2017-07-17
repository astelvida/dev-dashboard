import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import githubStore from './stores/githubStore';
import todoStore from './stores/todoStore';
import App from './components/App';
import './styles/columns.css';
import './styles/layout.css';

const rootEl = document.getElementById('root');
const render = (Component, stores) =>
  ReactDOM.render(
    <AppContainer>
      <Component {...stores} />
    </AppContainer>,
    rootEl
  );

render(App, { githubStore, todoStore });

if (module.hot) {
    module.hot.accept('./components/App', () => render(App, { githubStore, todoStore }));
}
