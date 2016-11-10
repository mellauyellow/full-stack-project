import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RegionsReducer from './regions_reducer';
import NeighborhoodsReducer from './neighborhoods_reducer';
import NeighborhoodReducer from './neighborhood_reducer';
import ReviewsReducer from './reviews_reducer';
import ImagesReducer from './images_reducer';
import RegionReducer from './region_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  regions: RegionsReducer,
  region: RegionReducer,
  neighborhoods: NeighborhoodsReducer,
  neighborhood: NeighborhoodReducer,
  reviews: ReviewsReducer,
  images: ImagesReducer,
  search: SearchReducer
});

export default RootReducer;
