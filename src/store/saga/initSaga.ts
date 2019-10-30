import { SagaMiddleware } from 'redux-saga';
import * as ConnexionSaga from '../../sagas/ConnexionSaga';

const rootSaga = [
    ConnexionSaga,
];

export const initSagas = (sagaMiddleware: SagaMiddleware) => {
    
    rootSaga.forEach((saga) => {
        Object.values(saga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    });
};
