import React, { useState,useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {signinRequestAction} from '../Action/index';
import firebase from '../utils/config'
import {withRouter} from 'react-router-dom';

 function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [emailInvalid, setEmailInvalid] = useState('')


    useEffect(() => {
        firebase.auth().onAuthStateChanged((authenticate) => {
            if (authenticate) {
                props.history.push('/home')
            } else {
                props.history.push('/')
            }
        })
        
    }, [])



    const onSubmit = () => {
        if (email == '') {
            setEmailError(true)
        }else if(email != "" && !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            setEmailInvalid('Invalid Email')
            setEmailError(true)
        }
        if (password == '') {
            setPasswordError(true)
        } else {
            const data = {
                email,
                password
            }
            console.log('data==>', data)
            props.loginRequest(data)
        }
    }

    return (
        <div >
            <Grid container
                direction="row"
                justify="center"
                alignItems="center" >
                <Grid xs={6}>
                    <div style={{
                        width: '100%', height: '100vh', background: '#1B98F5', justifyContent: 'center', alignItems: 'center', textAlign: 'center'
                    }}>
                        <img src='/images/loginimage.png' alt="Logo"
                            style={{ marginTop: '20%', height: '40%' }}
                        />
                        <h2 style={{ color: '#fff', fontSize: '30px' }}>Lorem Ipsum is simply dummy text</h2>
                        <p style={{ color: '#fff' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>

                </Grid >
                <Grid xs={6}>
                    <div style={{ display: 'block', margin: 'auto', justifyContent: 'center', alignItems: 'center', textAlign: 'center', lineHeight: '5px' }}>
                        <h3>Welcome Back</h3>
                        <p>Sign In to your Account</p>

                        <div style={{ marginTop: '30px' }}>
                            <TextField
                                label="Email"
                                margin="dense"
                                variant="outlined"
                                placeholder="email"
                                error={emailError}
                                style={{
                                    width: '50%',
                                    height: '10%',
                                }}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailError(false)
                                    setEmailInvalid('')
                                }}

                            />
                        </div>
                        <div style={{color: 'red',margin: '10px 0',}}>{emailInvalid}</div>
                        <div style={{ marginTop: '5px' }}>
                            <TextField
                                label="Password"
                                margin="dense"
                                variant="outlined"
                                placeholder="password"
                                error={passwordError}
                                style={{
                                    width: '50%',
                                    height: '40%',
                                }}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setPasswordError(false)
                                }}
                            />
                        </div>
                        <Button
                            onClick={onSubmit}
                            onMouseOver={(e) => e.target.color = 'red'}
                            style={{
                                width: '50%',
                                borderRadius: '4px',
                                border: '1px solid #bbb',
                                margin: '10px 0',
                                color: '#fff',
                                fontSize: '18px',
                                background: '#1B98F5'
                            }}>
                            Log in
                        </Button>
                        <div style={{ marginTop: '10px', marginRight: '20%' }}>
                            <Link to="/signup" style={{ textDecoration: 'inherit', color: '#000' }}>Don't have account? Signup</Link>
                        </div>
                    </div>
                </Grid>
            </Grid >
        </div >
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (data) => {
            dispatch(signinRequestAction(data))
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Login))