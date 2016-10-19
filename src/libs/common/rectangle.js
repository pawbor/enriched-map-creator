import {isNumber} from 'libs/common/types';

export function merge(r1, r2) {
  if(isValid(r1) && isValid(r2)) {
    var minX = Math.min(r1.minX, r2.minX);
    var maxX = Math.max(r1.maxX, r2.maxX);
    var minY = Math.min(r1.minY, r2.minY);
    var maxY = Math.max(r1.maxY, r2.maxY);
    return {minX, maxX, minY, maxY};
  }
  else if(isValid(r1)) { return r1; }
  else if(isValid(r2)) { return r2; }
  else { return null; }
}

export function isValid(rect) {
  if(!rect) { return false; }
  var {minX, maxX, minY, maxY} = rect;
  return [minX, maxX, minY, maxY].every(isNumber)
  && minX < maxX
  && minY < maxY;
}
