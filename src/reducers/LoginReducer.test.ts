import loginReducer from './LoginReducer';
import { USER_CONNECT, USER_DISCONNECT } from '../actionTypes/UserActionTypes';
import ILoginAction from './ILoginAction';

let initialState: boolean; 

describe('Login reducer', () => {

    beforeAll(() => {

        initialState = false; 
    });

    it('Should return the initial state', () => {

        const action: ILoginAction = {
            type: '',
            data: false,
        }

        expect(loginReducer(initialState, action)).toEqual(initialState);

    });

    it('Should connect', () => {

        const action: ILoginAction = {
            type: USER_CONNECT,
            data: true,
        }

        expect(loginReducer(initialState, action)).toEqual(action.data);

    });

    it('Should disconnect', () => {

        const action: ILoginAction = {
            type: USER_DISCONNECT,
            data: false,
        }

        expect(loginReducer(initialState, action)).toEqual(action.data);

    });

});


