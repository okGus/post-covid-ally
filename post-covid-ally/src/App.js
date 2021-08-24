import './App.css';
import Chat from './components/Chat';
import Login from './components/Login';
import {auth} from './firebase.js'
import {useAuthState} from 'react-firebase-hooks/auth'
import Navigation from './components/Navigation'

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      <Navigation />
      {user ? <Chat/> : <Login/>}
    </>
  );
}

export default App;
