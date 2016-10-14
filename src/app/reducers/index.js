import { combineReducers } from 'redux';
import { router } from 'redux-ui-router';
import currentEnrichedMap from './current-enriched-map';

const reducers = combineReducers({
  router,
  currentEnrichedMap,
});

export default reducers;
