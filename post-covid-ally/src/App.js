import React from 'react';
import './App.css';
import Signin from './components/SignIn';
import {auth} from './firebase.js'
import {useAuthState} from 'react-firebase-hooks/auth'
import Navigation from './components/Navigation';
import Account from './components/Account'
import ChatBot from './components/ChatBot'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
function App() {
  const [user] = useAuthState(auth)
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          
          <Route exact path="/signIn" component={Signin}/>
          <Route path="/account">
            {user ? <Account /> : <Redirect to="/signin"/>}
          </Route>
          <Route exact path="/">
              {user ? <ChatBot /> : <Redirect to="/signin"/>}
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
