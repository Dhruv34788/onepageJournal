import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import './index.css'
import Firebase, { FirebaseContext } from './components/firebase';
//redux-related imports
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import * as serviceWorker from './serviceWorker'

const store= createStore(rootReducer)

render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}>
      <App/>
    </Provider>
  </FirebaseContext.Provider>
  , document.getElementById('root')
)

serviceWorker.register()
