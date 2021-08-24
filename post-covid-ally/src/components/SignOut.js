import React from 'react'
import {auth} from '../firebase.js'
import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
function SignOut() {
    const history = useHistory();
    async function handleLogout() {
        await auth.signOut();
        history.push("/signin");
      }
    return (
        <div>
            <Button onClick={handleLogout}>Sign Out</Button>
        </div>
    )
}

export default SignOut