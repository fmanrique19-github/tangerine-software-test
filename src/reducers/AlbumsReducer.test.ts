import albumsReducer from './AlbumsReducer';
import { GET_ALBUMS, DELETE_ALBUMS } from '../actionTypes/AlbumsActionTypes';
import IAlbums from '../models/Albums';
import IAlbumsAction from './IAlbumsAction';

let initialState: IAlbums; 

describe('Albums reducer', () => {

    beforeAll(() => {

        initialState = []; 
    });

    it('Should return the initial state', () => {

        const action: IAlbumsAction = {
            type: '',
            data: [],
        }

        expect(albumsReducer(initialState, action)).toEqual(initialState);

    });

    it('Should get albums', () => {

        const action: IAlbumsAction = {
            type: GET_ALBUMS,
            data: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "quidem molestiae enim"
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "sunt qui excepturi placeat culpa"
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "omnis laborum odio"
                },
                {
                    "userId": 1,
                    "id": 4,
                    "title": "non esse culpa molestiae omnis sed optio"
                }
            ],
        }

        expect(albumsReducer(initialState, action)).toEqual(action.data);

    });

    it('Should delete albums', () => {

        const action: IAlbumsAction = {
            type: DELETE_ALBUMS,
            data: null as any,
        }

        expect(albumsReducer(initialState, action)).toEqual(action.data);

    });

});


