import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import RegionsMiddleware from './regions_middleware';
import NeighborhoodsMiddleware from './neighborhoods_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  RegionsMiddleware,
  NeighborhoodsMiddleware);

export default RootMiddleware;
