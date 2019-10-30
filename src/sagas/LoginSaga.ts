import { put } from 'redux-saga/effects';
import { USER_CONNECT, USER_DISCONNECT } from '../actionTypes/UserActionTypes';

export const login = () => {
    localStorage.setItem('isLogin', 'true');
}

export const logout = () =>{
    localStorage.setItem('isLogin', 'false');
}

export function* loginUser() {
    yield put({ type: USER_CONNECT, data: true }); 
}

export function* logoutUser() {
    yield put({ type: USER_DISCONNECT, data: false });   
}
