import { call, put } from 'redux-saga/effects';
import { DELETE_PHOTOS } from '../actionTypes/PhotosActionTypes';
import { getPhotos, deletePhotos } from './PhotosSaga';
import { fetchPhotosByAlbumId } from '../api/api';
import axios from 'axios';

jest.mock('axios');

/**
 * Simple saga tests
 * we can do a full saga test for each generator function
 */
describe('Photos Saga', () => {

    it('Should fetch Photos', () => {

        const photos = [
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
        ];
    
        const response = {data: photos};
        
        axios.get.mockResolvedValue(response);

        const fetch = getPhotos(1);

        expect(fetch.next().value).toEqual(call(fetchPhotosByAlbumId, 1));

    });

    it('Sould delete Photos', () => {

        const del = deletePhotos();

        expect(del.next().value).toEqual(put({ type: DELETE_PHOTOS, data: null }));
    });

});
