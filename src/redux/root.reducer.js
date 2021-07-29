import { combineReducers } from 'redux';
import { FavoritesReducer } from './Favorites/Favorites.reducer';

const rootReducer = combineReducers({
    favorites: FavoritesReducer,
});

export default rootReducer;