import { fetchAlbums } from '../api/api';
import { put, call } from 'redux-saga/effects';
import { GET_ALBUMS, DELETE_ALBUMS } from '../actionTypes/AlbumsActionTypes';

export function* getAlbums() {
 
    try {
        let data = yield call(fetchAlbums);

        data = yield data.data;

        yield put({ type: GET_ALBUMS, data });

    } catch(error) {

        yield put({ type: GET_ALBUMS, data: [] });
    }
} 

export function* deleteAlbums() {
 
    yield put({ type: DELETE_ALBUMS, data: null });
} 
