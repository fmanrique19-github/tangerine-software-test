import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, Store } from 'redux';
import createRootReducer from '../../reducers/RootReducer';

export const history = createBrowserHistory();

const mockStore = (initialState: any): Store => {
    return createStore(
        createRootReducer(history),
        initialState,
    );
}

applyMiddleware(routerMiddleware(history));

export default mockStore;
