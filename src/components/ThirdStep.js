import React, { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from "../StepContext";
import firebase from '../utils/config';
import { connect } from 'react-redux';
import {signupRequestAction} from '../Action/index'


function ThirdStep(props) {
    const { setStep, userData, setUserData } = useContext(multiStepContext)
    console.log('userData finsal====>', userData)
    const onFinalSubmit = (e) => {
        e.preventDefault()
        props.signupRequest(userData,setStep)
    }

    return (
        <div style={{ paddingLeft: '3%', }}>
            <div>
                <h3>Details taken.</h3>
            </div>


            <div style={{ flexDirection: "row" }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setStep(2)}
                    style={{ marginRight: '10px', }}
                >Back</Button>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setStep(1)}
                    style={{ marginRight: '10px', }}
                >Reset</Button>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: '10px', }}
                    onClick={(e) => onFinalSubmit(e)}
                >Submit</Button>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setStep(1)}
                >Cancel</Button>

            </div>
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        signupRequest: (data) => {
            dispatch(signupRequestAction(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(ThirdStep)