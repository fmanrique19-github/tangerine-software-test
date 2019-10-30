import { createBrowserHistory } from 'history';
import { createStore, Store } from 'redux';
import createRootReducer from '../reducers/RootReducer';
import compose, { saga } from './middleware/ComposeMiddlewares';
import { initSagas } from './saga/initSaga';


export const history = createBrowserHistory();

let isLogin: any = localStorage.getItem('isLogin');

if(!isLogin) {
    localStorage.setItem('isLogin', 'false');
}

isLogin = (isLogin === 'true');

const initialState = {
    user: {
        isLogin: isLogin,
    },
    albums: null,
    photos: null,
};

const store: Store = createStore(
    createRootReducer(history),
    initialState,
    compose,
);

export default store;

initSagas(saga);
