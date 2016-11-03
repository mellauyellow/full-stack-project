import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import RegionsMiddleware from './regions_middleware';
import NeighborhoodsMiddleware from './neighborhoods_middleware';
import ReviewsMiddleware from './reviews_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  RegionsMiddleware,
  NeighborhoodsMiddleware,
  ReviewsMiddleware
);

export default RootMiddleware;
