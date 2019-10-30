  
import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { connectRouter, LocationChangeAction, RouterState } from 'connected-react-router';
import userReducer from './UserReducer';
import albumsReducer from './AlbumsReducer';
import photosReducer from './PhotosReducer';
import IUser from '../models/User';
import IAlbums from '../models/Albums';
import IPhotos from '../models/Photos';

export interface IRootState extends Reducer {
  readonly router: Reducer<RouterState, LocationChangeAction>;
  readonly user: IUser;
  readonly albums: IAlbums;
  readonly photos: IPhotos;
}

const rootReducer = (history: History): Reducer => combineReducers({
  router: connectRouter(history),
  user: userReducer,
  albums: albumsReducer,
  photos: photosReducer,
});

export default rootReducer;
