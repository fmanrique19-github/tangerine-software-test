import React from 'react';
import renderer from 'react-test-renderer';
import Albums from './Albums';
import mockStore from '../tests/helpers/mockStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../store/saga/injectSaga');

describe('Albums Component', () => {

    it('Should render a spinner', () => {

        const props = {
            albums: null as any,
        };

        const tree = renderer
            .create(<Provider store={mockStore(props)}><Albums {...props} /></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render there is no albums available', () => {

        const props = {
            albums: [],
        };

        const tree = renderer
            .create(<Provider store={mockStore(props)}><Albums {...props} /></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render 3 albums', () => {

        const props = {
            albums: [
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
            ],
        };;

        const tree = renderer
            .create(<Provider store={mockStore(props)}><Router><Albums {...props} /></Router></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
