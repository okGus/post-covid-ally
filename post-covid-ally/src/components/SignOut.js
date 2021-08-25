import React from 'react'
import {auth} from '../firebase.js'
import { useHistory, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({linkStyle: {
      color: '#f3f3f3',
      textDecoration: 'none',
      fontSize: '40px',
      marginRight: theme.spacing(2)
    }
  }));
function SignOut() {
    const classes = useStyles();
    const history = useHistory();
    async function handleLogout() {
        await auth.signOut();
        history.push("/signin");
      }
    return (
        <div>
            <Link to='/signin' onClick={handleLogout} className={classes.linkStyle}><i class="fas fa-sign-out-alt"></i></Link>
        </div>
    )
}

export default SignOut