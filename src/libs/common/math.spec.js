import {average, sum} from './math';

describe('The "sum" method', () => {
  it('exists', () => {
    expect(sum).toBeDefined();
  });

  const testData = [{
    values: [137],
    expected: 137
  }, {
    values: [1, 2, 6, 7],
    expected: 16
  }];

  it('returns sum for set of numbers passed as array', () => {
    testData.forEach(({values, expected}) => {
      var result = sum(values);
      expect(result).toEqual(expected);
    });
  });

  it('returns sum for set of numbers passed as arguments', () => {
    testData.forEach(({values, expected}) => {
      var result = sum(...values);
      expect(result).toEqual(expected);
    });
  });
});

describe('The "average" method', () => {
  it('exists', () => {
    expect(average).toBeDefined();
  });

  const testData = [{
    values: [137],
    expected: 137
  }, {
    values: [1, 2, 6, 7],
    expected: 4
  }];

  it('returns average value for set of numbers passed as array', () => {
    testData.forEach(({values, expected}) => {
      var result = average(values);
      expect(result).toEqual(expected);
    });
  });

  it('returns average value for set of numbers passed as arguments', () => {
    testData.forEach(({values, expected}) => {
      var result = average(...values);
      expect(result).toEqual(expected);
    });
  });
});
