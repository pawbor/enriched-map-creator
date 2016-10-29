import selectiveReducer from 'libs/reducers/selective-reducer';
import valueReducer from './rich-map';

function getSelector(action) {
  return action && action.payload && action.payload.mapId;
}

export default selectiveReducer({
  getSelector,
  valueReducer
});
