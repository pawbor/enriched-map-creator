import normalizeCoordinates from './normalize-coordinates';

describe('The "normalizeCoordinates" method', () => {
  it('exists', () => {
    expect(normalizeCoordinates).toBeDefined();
  });

  it('requires 3 aruments: curve order, space defnition and coordinates to normalize', () => {
    var validOrder = 2;
    var validSpace = {minX: 0, maxX: 1, minY: -1, maxY: 1};
    var validCoords = {x: 0.5, y: -0.5};
    var invalidOrder = 0;
    var invalidSpace = {minX: 100, maxX: 20, minY: -32, maxY: 32};
    var invalidCoords = {x: -0.5, y: -0.5};

    expect(normalizeCoordinates.bind(null, validSpace, validOrder, validCoords)).not.toThrow();
    expect(normalizeCoordinates.bind(null, validSpace, invalidOrder, validCoords)).toThrowError(Error, /invalid curve order/i);
    expect(normalizeCoordinates.bind(null, invalidSpace, validOrder, validCoords)).toThrowError(Error, /invalid space defnition/i);
    expect(normalizeCoordinates.bind(null, validSpace, validOrder, invalidCoords)).toThrowError(Error, /invalid coordinates/i);
  });

  it('returns normalized coordinates', () => {
    const order = 3;
    const space = {minX: 8, maxX: 24, minY: -32, maxY: 32};
    const testData = [{
      coordinates: {x: 10, y: 0},
      expected: {x: 1, y: 4}
    }, {
      coordinates: {x: 9.9, y: -0.1},
      expected: {x: 0, y: 3}
    }, {
      coordinates: {x: 24, y: 32},
      expected: {x: 7, y: 7}
    }];

    testData.forEach(({coordinates, expected}) => {
      var result = normalizeCoordinates(space, order, coordinates);
      expect(result).toEqual(expected);
    });
  });

});
