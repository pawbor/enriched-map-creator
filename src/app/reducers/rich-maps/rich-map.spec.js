import {Action as MapAction} from 'app/actions/rich-map';
import reducer from './rich-map';

describe('The "rich-map" reducer', () => {
  it('exists', () => {
    expect(reducer).toBeDefined();
  });

  it('returns previous state on irrelevant actions', () => {
    const action = {type: 'fake-action'};
    var state = {};
    var result = reducer(state, action);
    expect(result).toBe(state);
  });

  describe(`on ${MapAction.ADD_MAP} action`, () => {
    const map = {};
    const payload = {map};
    const action = {type: MapAction.ADD_MAP, payload};

    it('returns previous state if it is defined', () => {
      var state = {};
      var result = reducer(state, action);
      expect(result).toBe(state);
      expect(result).not.toBe(payload.map);
    });

    it('returns map from payload if previous state is undefined', () => {
      var result = reducer(undefined, action);
      expect(result).toBe(payload.map);
    });
  });

  describe(`on ${MapAction.REMOVE_MAP} action`, () => {
    const action = {type: MapAction.REMOVE_MAP};

    it('returns undefined', () => {
      var result = reducer({}, action);
      expect(result).not.toBeDefined();
    });
  });

});
