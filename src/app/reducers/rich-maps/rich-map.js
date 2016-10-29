import {Action as MapAction} from 'app/actions/rich-map';

export default function (state, action) {
  switch (action.type) {
    case MapAction.ADD_MAP: {
      return state || action.payload.map;
    }
    case MapAction.REMOVE_MAP: {
      return undefined;
    }
    default: {
      return state;
    }
  }
}
