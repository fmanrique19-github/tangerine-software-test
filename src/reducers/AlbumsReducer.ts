import { GET_ALBUMS, DELETE_ALBUMS } from '../actionTypes/AlbumsActionTypes';
import IAlbums from '../models/Albums';
import IAlbumsAction from './IAlbumsAction';

const initialState: IAlbums = []; 

export default (state = initialState, action: IAlbumsAction) => {

    switch (action.type) {

        case GET_ALBUMS:
            return action.data;

        case DELETE_ALBUMS:
            return action.data;

        default:
            return state;
    }
};
