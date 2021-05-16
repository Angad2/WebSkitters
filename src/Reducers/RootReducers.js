import {combineReducers} from 'redux';
import AuthReducer from './AuthReducers'

const allReducers = combineReducers({
    AuthReducer: AuthReducer,
})

const rootReducer = (state, action) => {
    return allReducers(state, action);
}
export default rootReducer;