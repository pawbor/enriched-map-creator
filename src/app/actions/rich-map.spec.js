import {
  addMap,
  createMap,
  removeMap,
  Action
} from './rich-map';

describe('The "addMap" function', () => {
  it('exists', () => {
    expect(addMap).toBeDefined();
  });

  describe('returns new action object', () => {

    it(`with type ${Action.ADD_MAP}`, () => {
      var {type} = addMap();
      expect(type).toBe(Action.ADD_MAP);
    });

    it('with payload', () => {
      var payload = {};
      var result = addMap(payload);
      expect(result.payload).toBe(payload);
    });
  });
});

describe('The "createMap" function', () => {
  it('exists', () => {
    expect(createMap).toBeDefined();
  });

  describe('returns new action object', () => {

    it(`with type ${Action.ADD_MAP}`, () => {
      var {type} = createMap();
      expect(type).toBe(Action.ADD_MAP);
    });

    it('with payload', () => {
      var payload = {
        mapId: jasmine.anything(),
        map: jasmine.objectContaining({
          id: jasmine.anything(),
          basicInfo: jasmine.any(Object)
        })
      };
      var result = createMap();
      expect(result.payload).toEqual(jasmine.objectContaining(payload));
    });
  });
});

describe('The "removeMap" function', () => {
  it('exists', () => {
    expect(removeMap).toBeDefined();
  });

  describe('returns new action object', () => {

    it(`with type ${Action.REMOVE_MAP}`, () => {
      var {type} = removeMap();
      expect(type).toBe(Action.REMOVE_MAP);
    });

    it('with payload', () => {
      var payload = {};
      var result = removeMap(payload);
      expect(result.payload).toBe(payload);
    });
  });
});
