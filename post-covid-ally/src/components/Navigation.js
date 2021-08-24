import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { auth } from '../firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

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
        <img
              alt=""
              src="../8056.jpg"
              width="100"
              height="100"
              className="d-inline-block align-left"
            />
          <Typography variant="h6" className={classes.title}>
            Team Rocket
          </Typography>
          {user ? <Button color="inherit">Account</Button> : <Button color="inherit">Login</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}