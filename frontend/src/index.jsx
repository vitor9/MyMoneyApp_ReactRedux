import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from '../node_modules/redux-promise'
import multi from '../node_modules/redux-multi'
import thunk from '../node_modules/redux-thunk'

import App from './main/app'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
, document.getElementById('app'))