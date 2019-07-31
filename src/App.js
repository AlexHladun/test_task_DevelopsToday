import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ListPostsHandler from './components/ListPostsHandler';
import thunk from 'redux-thunk';
import { getNextState } from './redux/reducers';

const store = createStore(getNextState, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <ListPostsHandler />
    </Provider>
  );
}

export default App;
