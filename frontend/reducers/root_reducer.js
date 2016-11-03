import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RegionsReducer from './regions_reducer';
import NeighborhoodsReducer from './neighborhoods_reducer';
import NeighborhoodReducer from './neighborhood_reducer';
import ReviewsReducer from './reviews_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  regions: RegionsReducer,
  neighborhoods: NeighborhoodsReducer,
  neighborhood: NeighborhoodReducer,
  reviews: ReviewsReducer
});

export default RootReducer;
