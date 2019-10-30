import { takeEvery, call, all } from 'redux-saga/effects';
import { USER_CONNECT, USER_DISCONNECT } from '../actionTypes/UserActionTypes';
import { login, logout } from './LoginSaga';

function* isUserConnect() {
    yield takeEvery(USER_CONNECT, login); 
}

function* isUserDisconnect() {
    yield takeEvery(USER_DISCONNECT, logout);   
}

export default function*() {

    yield all([
        call(isUserConnect),
        call(isUserDisconnect),
    ]);  
}
