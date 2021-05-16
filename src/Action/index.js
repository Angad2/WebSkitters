import {
    SIGNIN_REQUEST,
    SIGNUP_REQUEST
} from './type'

export const signinRequestAction = (loginData) => {
    return {
        type: SIGNIN_REQUEST,
        loginData
    }
}

export const signupRequestAction = (signupData) => {
    return {
        type: SIGNUP_REQUEST,
        signupData
    }
}
