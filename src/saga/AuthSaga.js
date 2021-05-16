import { put, call, takeLatest, } from 'redux-saga/effects';
import firebase from '../utils/config'
import {
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,

    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,

} from '../Action/type';


export function* signupAction(action) {
    console.log('action',action)
    const email = action.signupData.email;
    const password = action.signupData.password
    const firstName = action.signupData.firstName;
    const lastName = action.signupData.lastName
    const phoneNo = action.signupData.phoneNo;
    const city = action.signupData.city
    const state = action.signupData.state;
    const zipcode = action.signupData.zipCode
    try {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(auhenticate => {
                console.log('Signup==>', auhenticate.user)
                const userId = firebase.auth().currentUser.uid;
                firebase.database().ref('users/' + userId)
                    .set({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        phoneNo: phoneNo,
                        state: state,
                        city: city,
                        zipcode: zipcode
                    }).then(() => {
                        alert('Signup Successfully')
                    })
                    .catch((error) => {
                        console.log('Storing Error', error)
                    })
            })
            .catch(error => {
                alert(error.message)
            })
    } catch (error) {
        yield put({ type: SIGNUP_FAILURE, error: error });
    }
}

export function* signinAction(action) {
    console.log('action', action.loginData.email)
    const email = action.loginData.email;
    const password = action.loginData.password
    try {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
                console.log('logged in==>', res)
            })
            .catch(error => {
                alert(error.message)
            })
    } catch (error) {
        //console.log(error);
        yield put({
            type: SIGNIN_FAILURE, data: error
        });
    }
}



export function* watchSignupRequest() {
    yield takeLatest(SIGNUP_REQUEST, signupAction)
}

export function* watchSigninRequest() {
    yield takeLatest(SIGNIN_REQUEST, signinAction)
}