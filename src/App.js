import React, { useState, useEffect } from 'react'
import './sass/App.scss'
import { Switch, Route } from 'react-router-dom'
import Cookies from 'js-cookie';
import Navbar from './components/Navbar/Navbar';

import PrivateRoute from './utils/PrivateRoute'
import FetchUser from './utils/FetchUser';
import CurrentUserContext from './context/current-user.context';
import SetUserContext from './context/set-user-context';
import CurrentUserListingsContext from './context/current-user-listings-context'

import public_route_group from './Routes/publicRoutes'
import auth_route_group from './Routes/privateRoutes';

function App() {
  

  const [user, setUser] = useState({})
  const [houses, setHouses] = useState({})
  useEffect(() => {
    const token = Cookies.get('token')
    FetchUser(token, setUser, setHouses)
    return () => {
      setUser({})
    };
  }, [])

  return (
    <div className="App">
    <CurrentUserContext.Provider value={user}>
    <SetUserContext.Provider value={setUser} >
    <CurrentUserListingsContext.Provider value={houses}>
      <Navbar setUser={setUser} />
      <Switch>
        {public_route_group.map((route, idx) => {
          return (
            <Route exact key={idx} path={route.path} component={route.component} />
          )
        })}

        {auth_route_group.map((route, idx) => {
          return (
            <PrivateRoute exact key={idx} path={route.path} component={route.component} />
          )
        })}
      </Switch>
      </CurrentUserListingsContext.Provider>
      </SetUserContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
