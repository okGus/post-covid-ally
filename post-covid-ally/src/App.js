import './App.css';
import Chat from './components/Chat';
import Signin from './components/Signin';
import {auth} from './firebase.js'
import {useAuthState} from 'react-firebase-hooks/auth'
import Navigation from './components/Navigation';
import Account from './components/Account'
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory } from 'react-router-dom'
function App() {
  const history = useHistory()
  const [user] = useAuthState(auth)
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          
          <Route path="/signin" component={Signin}/>
          <Route path="/account">
            {user ? <Account /> : <Redirect to="/signin"/>}
          </Route>
          <Route path="/">
              {user ? <Chat /> : <Redirect to="/signin"/>}
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
