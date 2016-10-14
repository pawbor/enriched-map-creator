import { combineReducers } from 'redux';
import { router } from 'redux-ui-router';
import enrichedMap from './enriched-map';

const reducers = combineReducers({
  router,
  enrichedMap
});

export default reducers;
