import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import { Link, Router } from 'react-router-dom'
import { auth } from '../firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import Signin from './Signin'
import Account from './Account.js';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  title: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
  },
  navColor: {
    backgroundColor: '#3a3b3c'
  }
}));

export default function Navigation() {
  const classes = useStyles();
  const [user] = useAuthState(auth);
  return (
    <div className={classes.root}>
      <AppBar className={classes.navColor} position="static">
        <Toolbar>
        <Link to="/"><img alt="" src="../8056.jpg" width="100" height="100"/></Link>
          <Typography variant="h6" className={classes.title}>
            Team Rocket
          </Typography>
          {user ? <Link to={Account}>Account</Link> : <Link to='/signin'>Login</Link>}
        </Toolbar>
      </AppBar>
    </div>
  );
}