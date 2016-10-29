import factory from './selective-reducer';

describe('The "selective-reducer" factory', () => {
  it('exists', () => {
    expect(factory).toBeDefined();
  });

  describe('creates reducer that', () => {
    const initialState = {a: 'foo'};

    const getSelector = jasmine.createSpy('getSelector')
    .and.callFake((action) => action.key);

    const valueReducer = jasmine.createSpy('valueReducer')
    .and.callFake((state, action) => action.value);

    var reducer;
    beforeEach(() => {
      reducer = factory({
        initialState,
        getSelector,
        valueReducer
      });
    });

    it('invokes "getSelector" with action', () => {
      var action = {key: 'x', value: 'y'};
      reducer(undefined, action);
      expect(getSelector).toHaveBeenCalledWith(action);
    });

    it('invokes "valueReducer" with selected child state and action', () => {
      var action = {key: 'x', value: 'y'};
      var state = {[action.key]: 'foo'};
      reducer(state, action);
      expect(valueReducer).toHaveBeenCalledWith(state[action.key], action);
    });

    it('uses "initialState" if state is undefined', () => {
      var result = reducer(undefined, undefined);
      expect(result).toBe(initialState);
    });

    describe('returns the same state', () => {
      it('if selector is undefined', () => {
        var action = {key: undefined, value: 'y'};
        var result = reducer(undefined, action);
        expect(result).toBe(initialState);
      });

      it('if value is not changed', () => {
        var action = {key: 'x', value: 'y'};
        var state = {[action.key]: action.value};
        var result = reducer(state, action);
        expect(result).toBe(state);
      });
    });

    describe('creates new state', () => {
      it('if new key is added', () => {
        var state = {};
        var action = {key: 'x', value: 'y'};
        var result = reducer(state, action);
        expect(result[action.key]).toBe(action.value);
        expect(result).not.toBe(state);
      });

      it('if value is changed', () => {
        var action = {key: 'x', value: 'y'};
        var state = {[action.key]: 'foo'};
        var result = reducer(state, action);
        expect(result[action.key]).toBe(action.value);
        expect(result).not.toBe(state);
      });

      it('if key is removed', () => {
        var action = {key: 'x', value: undefined};
        var state = {[action.key]: 'foo'};
        var result = reducer(state, action);
        expect(result[action.key]).not.toBeDefined();
        expect(result).not.toBe(state);
      });
    });
  });
});
