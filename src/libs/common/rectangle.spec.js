import * as Rectangle from './rectangle';

describe('Rectangle', () => {
  describe('The "merge" method', () => {
    it('exists', () => {
      expect(Rectangle.merge).toBeDefined();
    });

    it('returns a rectangle that covers both passed rectangles', () => {
      var r1 = {minX: 0, maxX: 1, minY: 0, maxY: 1};
      var r2 = {minX: 2, maxX: 3, minY: -0.5, maxY: 1.75};
      var expected = {minX: 0, maxX: 3, minY: -0.5, maxY: 1.75};
      expect(Rectangle.merge(r1, r2)).toEqual(expected);
    });

    it('returns a valid rectangle if other is invalid', () => {
      var r1 = {minX: 0, maxX: 1, minY: 0, maxY: 1};
      expect(Rectangle.merge(r1, null)).toBe(r1);
      expect(Rectangle.merge(null, r1)).toBe(r1);
    });

    it('returns null if both rectangles are invalid', () => {
      expect(Rectangle.merge(null, null)).toBe(null);
    });
  });

  describe('The "isValid" method', () => {
    it('exists', () => {
      expect(Rectangle.isValid).toBeDefined();
    });

    it('returns true if objects matches {minX: [number], maxX: [number > minX], minY: [number], maxY: [number > minY]}', () => {
      const testData = [{minX: 0, maxX: 1, minY: -1, maxY: 1}];

      testData.forEach(space => {
        var result = Rectangle.isValid(space);
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
        var result = Rectangle.isValid(space);
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
        var result = Rectangle.isValid(space);
        expect(result).toBe(false);
      });
    });

    it('returns false minimum if bigger than maximum', () => {
      const testData = [
        {minX: 10, maxX: 1, minY: -1, maxY: 1},
        {minX: 0, maxX: 1, minY: 3, maxY: 1},
      ];

      testData.forEach(space => {
        var result = Rectangle.isValid(space);
        expect(result).toBe(false);
      });
    });
  });
});
