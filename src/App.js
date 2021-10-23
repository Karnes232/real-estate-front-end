import React, { useState, useEffect } from 'react'
import './sass/App.scss'
import { Switch, Route } from 'react-router-dom'
import Cookies from 'js-cookie';

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home'
import Register from './pages/Register/Register';
import SignIn from './pages/Signin/SignIn';
import Dashboard from './pages/Dashboard/Dashboard';
import SingleHouse from './pages/SingleHouse/SingleHouse';

import PrivateRoute from './utils/PrivateRoute'
import FetchUser from './utils/FetchUser';
import CurrentUserContext from './context/current-user.context';


function App() {
  const [user, setUser] = useState({})

useEffect(() => {
  const token = Cookies.get('token')
  FetchUser(token, setUser)
  return () => {
    setUser({})
  };
}, [])

  return (
    <div className="App">
    <CurrentUserContext.Provider value={user}>
      <Navbar setUser={setUser} />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/register'>
          <Register setUser={setUser} />
        </Route>
        <Route exact path='/signin'>
          <SignIn setUser={setUser} />
        </Route>
        <PrivateRoute exact path='/dashboard'>
          <Dashboard setUser={setUser}/>
        </PrivateRoute>
        <Route exact path='/house/:id'>
          <SingleHouse />
        </Route>

      </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
