import photosReducer from './PhotosReducer';
import { GET_PHOTOS, DELETE_PHOTOS } from '../actionTypes/PhotosActionTypes';
import IPhotosAction from './IPhotosAction';
import IPhotos from '../models/Photos';

let initialState: IPhotos; 

describe('Photos reducer', () => {

    beforeAll(() => {

        initialState = []; 
    });

    it('Should return the initial state', () => {

        const action: IPhotosAction = {
            type: '',
            data: [],
        }

        expect(photosReducer(initialState, action)).toEqual(initialState);

    });

    it('Should get photos', () => {

        const action: IPhotosAction = {
            type: GET_PHOTOS,
            data: [
                {
                    "albumId": 1,
                    "id": 1,
                    "title": "accusamus beatae ad facilis cum similique qui sunt",
                    "url": "https://via.placeholder.com/600/92c952",
                    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
                },
                {
                    "albumId": 1,
                    "id": 2,
                    "title": "reprehenderit est deserunt velit ipsam",
                    "url": "https://via.placeholder.com/600/771796",
                    "thumbnailUrl": "https://via.placeholder.com/150/771796"
                },
                {
                    "albumId": 1,
                    "id": 3,
                    "title": "officia porro iure quia iusto qui ipsa ut modi",
                    "url": "https://via.placeholder.com/600/24f355",
                    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
                },
            ],
        }

        expect(photosReducer(initialState, action)).toEqual(action.data);

    });

    it('Should delete photos', () => {

        const action: IPhotosAction = {
            type: DELETE_PHOTOS,
            data: null as any,
        }

        expect(photosReducer(initialState, action)).toEqual(action.data);

    });

});


