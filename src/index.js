// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; 
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js'; 
import App from './App';
import './index.css';

import { Provider} from 'react-redux' /* code change */

const store = createStore(
    shoppingListItemReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

// code change - added Provider to wrap around App
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    
    document.getElementById('root'));