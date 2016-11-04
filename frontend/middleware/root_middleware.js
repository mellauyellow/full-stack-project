import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import RegionsMiddleware from './regions_middleware';
import NeighborhoodsMiddleware from './neighborhoods_middleware';
import ReviewsMiddleware from './reviews_middleware';
import ImagesMiddleware from './images_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  RegionsMiddleware,
  NeighborhoodsMiddleware,
  ReviewsMiddleware,
  ImagesMiddleware
);

export default RootMiddleware;
