import React from 'react';
import Home from './Views/Home/Index'
import Login from './Views/Login'
import Logout from './Views/Logout'
import Register from './Views/Register'
import AddProducts from './Views/AddProducts'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store, persistor } from '../src/store/'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'



function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/register' component={Register} />
          <Route path='/new-products' component={AddProducts} />
        </Router>
      </PersistGate>
    </Provider>

  )
}

export default App;