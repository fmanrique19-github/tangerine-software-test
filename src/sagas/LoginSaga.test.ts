import { put } from 'redux-saga/effects';
import { login, logout, loginUser, logoutUser } from './LoginSaga';
import { USER_CONNECT, USER_DISCONNECT } from '../actionTypes/UserActionTypes';

describe('Login Saga', () => {

    it('Should isLogin true', () => {

        login();

        expect(localStorage.getItem('isLogin')).toEqual('true');

    });

    it('Should isLogin false', () => {

        logout();

        expect(localStorage.getItem('isLogin')).toEqual('false');

    });

    it('Sould login user', () => {

        const login = loginUser();

        expect(login.next().value).toEqual(put({ type: USER_CONNECT, data: true }));
    });

    it('Sould logout user', () => {

        const logout = logoutUser();

        expect(logout.next().value).toEqual(put({ type: USER_DISCONNECT, data: false }));
    });

});
