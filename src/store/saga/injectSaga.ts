import { Saga } from 'redux-saga';
import { saga } from '../middleware/ComposeMiddlewares';

const runSaga = (sagaMiddleware: Saga, ...args: any) => {
    return saga.run(sagaMiddleware, ...args);
};

export default runSaga;
