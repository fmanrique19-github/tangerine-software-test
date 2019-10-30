import { call, put } from 'redux-saga/effects';
import { DELETE_ALBUMS } from '../actionTypes/AlbumsActionTypes';
import { getAlbums, deleteAlbums } from './AlbumsSaga';
import { fetchAlbums } from '../api/api';
import axios from 'axios';

jest.mock('axios');

/**
 * Simple saga tests
 * we can do a full saga test for each generator function
 */
describe('Albums Saga', () => {

    it('Should fetch albums', () => {

        const albums = [
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
        ];
    
        const response = {
            data: albums
        };
        
        axios.get.mockResolvedValue(response);

        const fetch = getAlbums();

        expect(fetch.next().value).toEqual(call(fetchAlbums));

    });

    it('Sould delete albums', () => {

        const del = deleteAlbums();

        expect(del.next().value).toEqual(put({ type: DELETE_ALBUMS, data: null }));
    });

});
