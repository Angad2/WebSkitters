import { all } from 'redux-saga/effects';

import {
    watchSignupRequest,
    watchSigninRequest,
} from './AuthSaga'

function* rootSaga(){
    yield all([
        watchSignupRequest(),
        watchSigninRequest(),
    ])
}

export default rootSaga;