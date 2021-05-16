import React, { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from "../StepContext";


export default function SecondStep() {
    const { setStep, userData, setUserData } = useContext(multiStepContext)

    const [state, setState] = useState('');
    const [stateError, setStateError] = useState(false)

    const [city, setCity] = useState('');
    const [cityError, setCityError] = useState(false)

    const [zipCode, setZipCode] = useState('');
    const [zipCodeError, setZipCodeError] = useState(false)
    const [enable, setEnable] = useState(true)

    const submitForm = (e) =>{
        e.preventDefault();
        setEnable(false)

        if(state == ''){
            setStateError(true)
        }
        if(city == ''){
            setCityError(true)
        }
        if(zipCode == ''){
            setZipCodeError(true)
        }else{
            const data = {
                state,
                city,
                zipCode,
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                password: userData.password,
                phoneNo: userData.phone
            }
            setUserData(data)
            console.log('data====>', data)
        }
    }

    return (
        <div style={{ paddingLeft: '3%', }}>
            <div>
                <TextField
                    label="State"
                    margin="normal"
                    variant="outlined"
                    placeholder="state"
                    error={stateError}
                    onChange={(e)=>{
                        setState(e.target.value)
                        setStateError(false)
                    }}
                />
            </div>

            <div>
                <TextField
                    label="City"
                    margin="normal"
                    variant="outlined"
                    placeholder="city"
                    error={cityError}
                    onChange={(e)=>{
                        setCity(e.target.value)
                        setCityError(false)
                    }}
                />
            </div>

            <div>
                <TextField
                    label="Zip code"
                    margin="normal"
                    variant="outlined"
                    type="number"
                    placeholder="zip code"
                    error={zipCodeError}
                    onChange={(e)=>{
                        setZipCode(e.target.value)
                        setZipCodeError(false)
                    }}
                />
            </div>


            <div style={{ flexDirection: "row", marginTop: '10px' }}>
                <Button variant="contained"
                    onClick={() => setStep(1)}
                    color="primary" style={{ marginRight: '10px', }}>Back</Button>

                <Button variant="contained" color="primary" style={{ marginRight: '10px' }} onClick={(e) => submitForm(e)}>Save</Button>

                <Button variant="contained"
                    onClick={() => setStep(3)}
                    disabled={enable}
                    color="primary">Next</Button>
            </div>
        </div>
    )

}