import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';


const history = createBrowserHistory();

export const saga = createSagaMiddleware();

const middlewares: Middleware[] = [
    saga,
    routerMiddleware(history),
];

/**
 * 
 * Only for dev env, for prod env we should use compose from redux
 * For Production Mode :
 * import { compose } from 'redux';
 * use compose instead of composeWithDevTools
 * 
*/
export default composeWithDevTools(
    applyMiddleware(...middlewares),
);
