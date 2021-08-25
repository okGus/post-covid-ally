import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { auth } from '../firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignOut from './SignOut.js';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }, menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  }, title: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
  }, navColor: {
    backgroundColor: '#3a3b3c'
  }, linkStyle: {
    color: '#f3f3f3',
    textDecoration: 'none',
    fontSize: '40px',
    marginRight: theme.spacing(2)
  }
}));

export default function Navigation() {
  const classes = useStyles();
  const [user] = useAuthState(auth);
  return (
    <div className={classes.root}>
      <AppBar className={classes.navColor} position="static">
        <Toolbar>
        <Link className={classes.linkStyle} to="/"><i class="fas fa-rocket"></i></Link>
          <Typography variant="h6" className={classes.title}>
            Team Rocket
          </Typography>
          { user ?
          <>
            <Link to='/account' className={classes.linkStyle}><i class="fas fa-user"></i></Link>
            <SignOut />
          </>
              : 
            <Link to='/signin' className={classes.linkStyle}><i class="fas fa-sign-in-alt"></i></Link>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}