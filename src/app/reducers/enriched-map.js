import {
  ADD_FEATURE
} from 'app/actions/enriched-map';

const INITIAL_STATE = {
  selectedLayer: '1',
  layers: [{
    id: '1',
    name: 'Test layer',
  }],
  features: [{
    id: '1',
    layerId: '1',
    geometry: {
      type: 'Point',
      coordinates: [20.951243, 52.262132]
    }
  }, {
    id: '2',
    layerId: '1',
    geometry: {
      type: 'Point',
      coordinates: [20.977605, 52.254037]
    }
  }, {
    id: '3',
    layerId: '1',
    geometry: {
      type: 'Point',
      coordinates: [20.956870, 52.268996]
    }
  }, {
    id: '4',
    layerId: '1',
    geometry: {
      type: 'Point',
      coordinates: [20.976178, 52.265955]
    }
  }]
};

export default function enrichedMap(state = INITIAL_STATE, action) {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case ADD_FEATURE:
      return Object.assign({}, state, {
        features: features(state.features, action)
      });
    default:
      return state;
  }
}

function features(state = [], action) {
  switch (action.type) {
    case ADD_FEATURE:
      return [...state, action.payload];
    default:
      return state;
  }
}
