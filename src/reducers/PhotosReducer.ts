import IPhotos from '../models/Photos';
import IPhotosAction from './IPhotosAction';
import { GET_PHOTOS, DELETE_PHOTOS } from '../actionTypes/PhotosActionTypes';

const initialState: IPhotos = []; 

export default (state = initialState, action: IPhotosAction) => {

    switch (action.type) {

        case GET_PHOTOS:
            return action.data;

        case DELETE_PHOTOS:
            return action.data;

        default:
            return state;
    }

};
