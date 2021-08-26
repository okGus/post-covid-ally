import React from 'react';
import Signin from './components/SignIn';
import {auth} from './firebase.js'
import {useAuthState} from 'react-firebase-hooks/auth'
import Navigation from './components/Navigation';
import Account from './components/Account'
import ChatBot from './components/ChatBot';
import Chat from './components/Chat'
import './App.css';
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
          <Route path="/chat">
            <Chat />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;