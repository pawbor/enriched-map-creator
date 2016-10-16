import {isNumber} from 'libs/common/types';

export function isValidCurveOrder(curveOrder) {
  return isNumber(curveOrder) && curveOrder >= 1 && curveOrder <= 30 ;
}

export function isValidCurveSpace(curveSpace) {
  var {minX, maxX, minY, maxY} = curveSpace || {};
  return [minX, maxX, minY, maxY].every(isNumber)
  && minX < maxX
  && minY < maxY;
}

export function isValidCoordinates(curveSpace, coordinates) {
  var {minX, maxX, minY, maxY} = curveSpace || {};
  var {x, y} = coordinates || {};
  return [x, y].every(isNumber)
  && x >= minX && x <= maxX
  && y >= minY && y <= maxY;
}
