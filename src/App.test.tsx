import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from './App';
import mockStore from './tests/helpers/mockStore';

it('renders without crashing', () => {
  
  const props = {
    user: {
        isLogin: false,
    },
    albums: null,
    photos: null,
  };

  const tree = renderer
      .create(<Provider store={mockStore(props)}><App {...props} /></Provider>)
      .toJSON();
  expect(tree).toMatchSnapshot();

});
