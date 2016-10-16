import {
  isValidCurveOrder,
  isValidCurveSpace,
  isValidCoordinates
} from 'libs/hilbert-curve/validators';

describe('Validators:', () => {
  describe('The "isValidCurveSpace" method', () => {
    it('exists', () => {
      expect(isValidCurveSpace).toBeDefined();
    });

    it('returns true if objects matches {minX: [number], maxX: [number > minX], minY: [number], maxY: [number > minY]}', () => {
      const testData = [{minX: 0, maxX: 1, minY: -1, maxY: 1}];

      testData.forEach(space => {
        var result = isValidCurveSpace(space);
        expect(result).toBe(true);
      });
    });

    it('returns false if any of required properties is not defined', () => {
      const testData = [
        {maxX: 1, minY: -1, maxY: 1},
        {minX: 0, minY: -1, maxY: 1},
        {minX: 0, maxX: 1, maxY: 1},
        {minX: 0, maxX: 1, minY: -1,}
      ];

      testData.forEach(space => {
        var result = isValidCurveSpace(space);
        expect(result).toBe(false);
      });
    });

    it('returns false if any of required properties is not a number', () => {
      const testData = [
        {minX: '0', maxX: 1, minY: -1, maxY: 1},
        {minX: 0, maxX: [1], minY: -1, maxY: 1},
        {minX: 0, maxX: 1, minY: null, maxY: 1},
        {minX: 0, maxX: 1, minY: -1, maxY: {}}
      ];

      testData.forEach(space => {
        var result = isValidCurveSpace(space);
        expect(result).toBe(false);
      });
    });

    it('returns false minimum if bigger than maximum', () => {
      const testData = [
        {minX: 10, maxX: 1, minY: -1, maxY: 1},
        {minX: 0, maxX: 1, minY: 3, maxY: 1},
      ];

      testData.forEach(space => {
        var result = isValidCurveSpace(space);
        expect(result).toBe(false);
      });
    });
  });

  describe('The "isValidCurveOrder" method', () => {
    it('exists', () => {
      expect(isValidCurveOrder).toBeDefined();
    });

    it('returns true for numbers in range <1, 30> ', () => {
      const testData = [1, 3, 16, 30];

      testData.forEach(order => {
        var result = isValidCurveOrder(order);
        expect(result).toBe(true);
      });
    });

    it('returns false for numbers outside range <1, 30>', () => {
      const testData = [0, -30, 31];

      testData.forEach(order => {
        var result = isValidCurveOrder(order);
        expect(result).toBe(false);
      });
    });

    it('returns false for values that are not a number', () => {
      const testData = ['0', null, {}, [1]];

      testData.forEach(order => {
        var result = isValidCurveOrder(order);
        expect(result).toBe(false);
      });
    });
  });

  describe('The "isValidCoordinates" method', () => {
    it('exists', () => {
      expect(isValidCoordinates).toBeDefined();
    });

    it('returns true for coordinates inside a curve space', () => {
      const space = {minX: 0, maxX: 1, minY: -1, maxY: 1};
      const testData = [{x: 0.5, y: -0.5}, {x: 0, y: 1}];

      testData.forEach(coordinates => {
        var result = isValidCoordinates(space, coordinates);
        expect(result).toBe(true);
      });
    });

    it('returns false for coordinates outside a curve space', () => {
      const space = {minX: 0, maxX: 1, minY: -1, maxY: 1};
      const testData = [{x: -0.5, y: -0.5}, {x: 0, y: 2}];

      testData.forEach(coordinates => {
        var result = isValidCoordinates(space, coordinates);
        expect(result).toBe(false);
      });
    });
  });
});
