import React from 'react';
import renderer from 'react-test-renderer';
import Photos from './Photos';
import mockStore from '../tests/helpers/mockStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../store/saga/injectSaga');

describe('Photos Component', () => {

    it('Should render a spinner', () => {

        const props = {
            photos: null as any,
        };

        const tree = renderer
            .create(<Provider store={mockStore(props)}><Photos {...props} /></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render there is no photos available', () => {

        const props = {
            photos: [],
        };

        const tree = renderer
            .create(<Provider store={mockStore(props)}><Photos {...props} /></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render 3 photos', () => {

        const props = {
            photos: [
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
        };;

        const tree = renderer
            .create(<Provider store={mockStore(props)}><Router><Photos {...props} /></Router></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
