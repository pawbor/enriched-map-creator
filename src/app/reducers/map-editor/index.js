const INITIAL_STATE = {
  modes: [{
    id: 'ADD_POINT'
  }],
  currentMode: 'ADD_POINT'
};

export default function (state = INITIAL_STATE, action) {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    default:
    return state;
  }
}
