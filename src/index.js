import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {createRoot} from 'react-dom/client';
import {createStore,combineReducers} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import { plottedPoints } from './reducers';
const allReducers=combineReducers({
plottedPoints
})

const store=createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const rootElement=document.getElementById('root')
const root=createRoot(rootElement)
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
     </Provider>
  </React.StrictMode>
);


