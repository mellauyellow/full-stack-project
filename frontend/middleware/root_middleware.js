import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import RegionsMiddleware from './regions_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  RegionsMiddleware);

export default RootMiddleware;
