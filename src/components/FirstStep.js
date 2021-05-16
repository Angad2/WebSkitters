import React, { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from "../StepContext";


export default function FirstStep() {

    const [firstName, setFirstName] = useState('');
    const [firstNameError, setfirstNameError] = useState(false)

    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState(false)

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false)
    const [emailInvalid, setEmailInvalid] = useState('')

    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState(false)

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false)

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    const [confirmPasswordInvalid, setConfirmPasswordInvalid] = useState('');
    const [enable, setEnable] = useState(true)

    const { setStep, userData, setUserData } = useContext(multiStepContext)

    const submitForm = (e) => {
        e.preventDefault();
        setEnable(false)
        if(firstName == ''){
            setfirstNameError(true)
        }
        if(lastName == ''){
            setLastNameError(true)
        }
        if(email == ''){
            setEmailError(true)
        }else if(email != "" && !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            setEmailInvalid('Invalid Email')
        }
        if(phone == ''){
            setPhoneError(true)
        }
        if(password == ''){
            setPasswordError(true)
        }
        if(confirmPassword == ''){
            setConfirmPasswordError(true)
        }else if(password !== "" && confirmPassword !== "" && confirmPassword !== password){
            setConfirmPasswordInvalid('Password does not match')
        }else{
            const data = {
                firstName,
                lastName,
                email,
                phone,
                password
            }
            console.log('data=>',data);
            setUserData(data)
        }


    }

    return (
        <div style={{ paddingLeft: '3%', }}>
            <div>
                <TextField label="First name"
                    margin="normal"
                    variant="outlined"
                    placeholder="First name"
                    error={firstNameError}
                    // onBlur={() => setfirstNameError(true)}
                    onChange={(e) => {
                        setFirstName(e.target.value)
                        setfirstNameError(false)
                    }}
                />
            </div>

            <div>
                <TextField
                    label="Last name"
                    margin="normal"
                    variant="outlined"
                    placeholder="Last name"
                    error={lastNameError}
                    // onBlur={() => setLastNameError(true)}
                    onChange={(e) => {
                        setLastName(e.target.value)
                        setLastNameError(false)
                    }}
                />
            </div>

            <div>
                <TextField
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    placeholder="Email"
                    error={emailError}
                    // onBlur={() => setEmailError(true)}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        setEmailError(false)
                        setEmailInvalid('')
                    }}
                />
                
            </div>
            <span style={{color: 'red'}}>{emailInvalid}</span>
            <div >
                <TextField
                    label="Phone"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    placeholder="Phone"
                    error={phoneError}
                    // onBlur={() => setPhoneError(true)}
                    onChange={(e) => {
                        setPhone(e.target.value)
                        setPhoneError(false)
                    }}
                />

            </div>

            <div>
                <TextField
                    label="Password"
                    margin="normal"
                    variant="outlined"
                    placeholder="Password"
                    type="password"
                    error={passwordError}
                    // onBlur={() => setPasswordError(true)}
                    onChange={(e) => {
                        setPassword(e.target.value)
                        setPasswordError(false)
                    }}
                />
            </div>

            <div>
                <TextField
                    label="Confirm Password"
                    margin="normal"
                    variant="outlined"
                    type="password"
                    placeholder="Confirm password"
                    // label={confirmPasswordInvalid}
                    error={confirmPasswordError}
                    // onBlur={() => setConfirmPasswordError(true)}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value)
                        setConfirmPasswordError(false)
                        setConfirmPasswordInvalid('')
                    }}
                />
            </div>
            <span style={{color: 'red'}}>{confirmPasswordInvalid}</span>


            <div style={{ flexDirection: "row", marginTop: '10px' }}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: '10px', }}
                    onClick={(e) => submitForm(e)}
                >
                    Save
                </Button>

                <Button
                    variant="contained"
                    onClick={() => setStep(2)}
                    disabled={enable}
                    color="primary"
                >
                    Next
                </Button>
            </div>
        </div>
    )

}