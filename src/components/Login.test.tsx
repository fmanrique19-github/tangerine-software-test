import React from 'react';
import renderer from 'react-test-renderer';
import Login from './Login';
import mockStore from '../tests/helpers/mockStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Login Component', () => {

    it('Should display login form', () => {

        const props = {
            user: {
                isLogin: false,
            },
            albums: null,
            photos: null,
        };

        const tree = renderer
            .create(<Provider store={mockStore(props)}><Router><Login {...props} /></Router></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should display div tag', () => {

        const props = {
            user: {
                isLogin: true,
            },
            albums: null,
            photos: null,
        };

        const tree = renderer
            .create(<Provider store={mockStore(props)}><Router><Login {...props} /></Router></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
