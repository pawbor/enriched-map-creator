import {
  isValidCurveOrder,
  isValidCurveSpace,
  isValidCoordinates,
} from 'libs/hilbert-curve/validators';

export default function normalizeCoordinates(curveSpace, curveOrder, coordinates) {
  if(!isValidCurveSpace(curveSpace)) {
    throw new Error('Invalid space defnition');
  }

  if(!isValidCurveOrder(curveOrder)) {
    throw new Error('invalid curve order');
  }

  if(!isValidCoordinates(curveSpace, coordinates)) {
    throw new Error('Invalid coordinates');
  }

  var {minX, maxX, minY, maxY} = curveSpace;
  var {x, y} = coordinates;

  var gridSize = calcGridSize(curveOrder);
  x = calcNormalizedValue(gridSize, minX, maxX, x);
  y = calcNormalizedValue(gridSize, minY, maxY, y);

  return {x, y};
}

function calcGridSize(curveOrder) {
  return 1 << curveOrder;
}

function calcNormalizedValue(gridSize, min, max, val) {
  var span = max - min;
  return val === max
  ? gridSize - 1
  : Math.floor((val - min) * gridSize / span);
}
