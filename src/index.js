import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Router, Route, hashHistory } from 'react-router'
import reducer from './reducers';

import UserModal from './components/UserModal'

const store = createStore(reducer, applyMiddleware(thunk))

      //<Route path='/' component={App}>
      //  <Route path='user-management/:id' component={UserModal} />
      //</Route>
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App} />
      <Route path='user-management/:id' component={UserModal} />
    </Router>
  </Provider>
  ,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
