import {
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,

    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,

} from '../Action/type';

const initialState = {
    signinResponse: {},
    signupResponse: {},
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_REQUEST:
            return {
                ...state,
                status: action.type,
            }
        case SIGNIN_SUCCESS:
            return {
                ...state,
                status: action.type,
                signinResponse: action.data,

            }
        case SIGNIN_FAILURE:
            return {
                ...state,
                status: action.type,
                signinResponse: action.data,
            }
        case SIGNUP_REQUEST:
            return {
                ...state,
                status: action.type,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                status: action.type,
                signupResponse: action.data,
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                status: action.type,
                signupResponse: action.error,
            }
        default:
            return state;
    }
}

export default AuthReducer;