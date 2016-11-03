import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RegionsReducer from './regions_reducer';
import NeighborhoodsReducer from './neighborhoods_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  regions: RegionsReducer,
  neighborhoods: NeighborhoodsReducer
});

export default RootReducer;
