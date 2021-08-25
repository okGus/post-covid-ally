import './App.css';
import Chat from './components/Chat';
import Signin from './components/SignIn';
import {auth} from './firebase.js'
import {useAuthState} from 'react-firebase-hooks/auth'
import Navigation from './components/Navigation';
import Account from './components/Account'
///
import React from 'react';
import Chatbot from 'react-chatbot-kit'
import './App.css';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
///


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
              {user ? <Chat /> : <Redirect to="/signin"/>}
          </Route>
        </Switch>
      </div>
      <div className="App">
        <header className="App-header">
          <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
        </header>
      </div>
    </Router>
    
  );
}

export default App;
