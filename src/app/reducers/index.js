import { combineReducers } from 'redux';
import { router } from 'redux-ui-router';
import mapEditor from './map-editor';

const reducers = combineReducers({
  router,
  mapEditor
});

export default reducers;
