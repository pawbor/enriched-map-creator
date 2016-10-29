import { combineReducers } from 'redux';
import { router } from 'redux-ui-router';
import maps from './rich-maps';

export default combineReducers({
  router,
  maps
});
