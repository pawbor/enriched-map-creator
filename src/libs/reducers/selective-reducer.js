const identity = (val)  => val;

export default function factory(definition) {
  var {
    initialState = {},
    getSelector,
    valueReducer = identity
  } = definition;

  return function reducer(state = initialState, action = {}) {
    var selector = getSelector(action);
    if(!selector) { return state; }

    var nextState = Object.assign({}, state);
    var prevValueState = state[selector];
    var nextValueState = valueReducer(prevValueState, action);

    if(prevValueState === nextValueState) { return state; }

    if(nextValueState === 'undefined') {
      delete nextState[selector];
    } else {
      nextState[selector] = nextValueState;
    }

    return nextState;
  };
}
