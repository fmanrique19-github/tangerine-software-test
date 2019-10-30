import ILoginAction from './ILoginAction';
import { USER_CONNECT, USER_DISCONNECT } from '../actionTypes/UserActionTypes';

const initialState: boolean = false; 

export default (state = initialState, action: ILoginAction) => {

    switch (action.type) {

        case USER_CONNECT:
            return action.data;

        case USER_DISCONNECT:
            return action.data;

        default:
            return state;
    }

};
