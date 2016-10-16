import computeHilbertValue from './hilbert-value';

describe('The "computeHilbertValue" method', () => {
  it('exists', () => {
    expect(computeHilbertValue).toBeDefined();
  });

  it('returns valid hilbert values', () => {
    var orders = [2, 13, 24, 30];
    const space = {minX: 0, maxX: 1, minY: 0, maxY: 1};

    var coordinates = {
      first: {x: 0, y: 0},
      middle: {x: 0.5, y: 0.5},
      last: {x: 1, y: 0}
    };

    orders.forEach(order => {
      var expected = {
        first: 0,
        middle: Math.pow(4, order) / 2,
        last: Math.pow(4, order) - 1
      };
      Object.keys(coordinates).forEach(key => {
        var result = computeHilbertValue(space, order, coordinates[key]);
        expect(result).toEqual(expected[key]);
      });
    });
  });

});
