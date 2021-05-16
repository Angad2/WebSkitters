import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import firebase from '../utils/config'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'end',
        color: '#fff',
        background: '#1B98F5',
        fontSize: '20px',
        height: '40px',
        fontWeight: '700'
    },
    logout: {
        padding: theme.spacing(2),
        textAlign: 'end',
        color: '#fff',
        background: '#1B98F5',
        fontSize: '20px',
        paddingRight: '50px',
        height: '40px'
    },
}));

function Home() {
    const classes = useStyles();

    const [userData, setUserData] = useState('');

    useEffect(() => {
        const userId = firebase.auth().currentUser.uid;
        firebase.
            database()
            .ref(`/users/${userId}`)
            .once('value')
            .then(snapshot => {
                console.log('User data: ', snapshot.val());
                setUserData(snapshot.val())
            });
    }, [])

    const signout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                console.log("Sign Out");
            })
            .catch(error => alert(error.message))
    }

    return (
        <div >
            <Grid container>
                <Grid item xs={6}>
                    <div className={classes.paper}>Dash board</div>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.logout}>
                        <button onClick={signout} style={{ textAlign: 'center', background: '#fff', borderRadius: '4px', color: 'red', border: 'none', padding: '5px 10px', }}>Sign out</button>
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <div >
                        <h2 style={{ textAlign: 'center', marginRight: '10%' }}>Welcome {userData.firstName}</h2>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
