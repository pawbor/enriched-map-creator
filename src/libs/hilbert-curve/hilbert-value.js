import normalizeCoordinates from './normalize-coordinates';

export default function computeHilbertValue(curveSpace, curveOrder, coordinates) {
  coordinates = normalizeCoordinates(curveSpace, curveOrder, coordinates);
  var hilbertValue = 0;
  for (var step = curveOrder - 1; step >= 0; step--) {
    var quad = getQuadCoordinates(step, coordinates);
    hilbertValue += getPartialHilbertValue(step, quad);
    coordinates = rotateCoordinates(step, quad, coordinates);
  }
  return hilbertValue;
}

function getQuadCoordinates(step, {x, y}) {
  return {
    x: getNthBit(x, step),
    y: getNthBit(y, step)
  };
}

function getNthBit(val, n) {
  var shifted = val / Math.pow(2, n);
  return shifted & 1;
}

function getPartialHilbertValue(step, quad) {
  var quadValue = (3 * quad.x) ^ quad.y;
  var shift = Math.pow(4, step);
  return quadValue * shift;
}

function rotateCoordinates(step, {quadX, quadY}, {x, y}) {
  if (quadY == 0) {
    if (quadX == 1) {
      var mask = allOnes(step);
      x ^= mask;
      y ^= mask;
    }
    [x, y] = [y, x];
  }
  return {x, y};
}

function allOnes(length) {
  return Math.pow(2, length) - 1;
}
