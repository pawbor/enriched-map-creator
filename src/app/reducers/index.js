import { combineReducers } from 'redux';
import { router } from 'redux-ui-router';
import mapEditor from './map-editor';
import currentEnrichedMap from './current-enriched-map';

const reducers = combineReducers({
  router,
  currentEnrichedMap,
  mapEditor
});

export default reducers;
