import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import user_reducer from "./store/user-panel/user-panel-reducer";
import admin_reducer from "./store/admin-panel/admin-panel-reducer";

const allReducers = combineReducers({user_reducer,admin_reducer});

export const store = createStore(allReducers,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
