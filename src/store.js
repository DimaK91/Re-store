import {applyMiddleware, createStore} from "redux";
import reducer from "./reducers/reducers";
import thunkMiddleware from 'redux-thunk';

const logMiddleware = ({getState}) => (next) => (action) => {
    console.log(action.type, getState());
    return next(action);
};

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }
    return next(action);
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware));

const delayedActionCreator= (timeout) => (dispatch) => {
    setTimeout(()=>dispatch({
        type: 'DELAY_ACTION'
    }), timeout);
};

store.dispatch(delayedActionCreator(3000));

export default store;