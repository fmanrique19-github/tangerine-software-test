import { fetchPhotosByAlbumId } from '../api/api';
import { put, call } from 'redux-saga/effects';
import { GET_PHOTOS, DELETE_PHOTOS } from '../actionTypes/PhotosActionTypes';

export function* getPhotos(id: number) {
 
    try {
        let data = yield call(fetchPhotosByAlbumId, id);

        data = yield data.data;

        yield put({ type: GET_PHOTOS, data });

    } catch(error) {

        yield put({ type: GET_PHOTOS, data: [] });
    }
} 

export function* deletePhotos() {
 
    yield put({ type: DELETE_PHOTOS, data: null });
} 
