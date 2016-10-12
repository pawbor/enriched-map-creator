const INITIAL_STATE = {
  layers: [{
    id: 1,
    overlays: [{
      type: 'Point',
      coordinates: [20.951243, 52.262132],
    }, {
      type: 'Point',
      coordinates: [20.977605, 52.254037],
    }, {
      type: 'Point',
      coordinates: [20.956870, 52.268996],
    }, {
      type: 'Point',
      coordinates: [20.976178, 52.265955],
    }]
  }]
};

export default function(state = INITIAL_STATE, action) {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    default:
    return state;
  }
}
