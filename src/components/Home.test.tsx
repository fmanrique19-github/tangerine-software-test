import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';
import mockStore from '../tests/helpers/mockStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../store/saga/injectSaga');

describe('Home Component', () => {

    it('Should display home page with no albums and no photos', () => {

        const props = {
            user: {
                isLogin: true,
            },
            albums: [],
            photos: [],
        };

        const tree = renderer
            .create(<Provider store={mockStore(props)}><Router><Home {...props} /></Router></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should display div tag', () => {

        const props = {
            user: {
                isLogin: false,
            },
            albums: [],
            photos: [],
        };

        const tree = renderer
            .create(<Provider store={mockStore(props)}><Router><Home {...props} /></Router></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
