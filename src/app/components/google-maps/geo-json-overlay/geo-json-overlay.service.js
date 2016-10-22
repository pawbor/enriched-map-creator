import gMaps from 'libs/google-maps';
import { GeometryType } from '../common/geo-json';

const toLatLngs = {
  fromPosition: ([lng, lat]) => ({lng, lat}),
  fromLineString: (coordinates) => coordinates.map(toLatLngs.fromPosition),
  fromPolygon: (coordinates) => coordinates.map(toLatLngs.fromLineString)
};

const converters = {
  [GeometryType.POINT]: (coordinates) => new gMaps.Marker({
    position: toLatLngs.fromPosition(coordinates)
  }),
  [GeometryType.LINE_STRING]: (coordinates) => new gMaps.Polyline({
    path: toLatLngs.fromLineString(coordinates)
  }),
  [GeometryType.POLYGON]: (coordinates) => new gMaps.Polygon({
    paths: toLatLngs.fromPolygon(coordinates)
  }),
};

const updaters = {
  [GeometryType.POINT]: (overlay, coordinates) => overlay.setPosition(
    toLatLngs.fromPosition(coordinates)
  ),
  [GeometryType.LINE_STRING]: (overlay, coordinates) => overlay.setPath(
    toLatLngs.fromLineString(coordinates)
  ),
  [GeometryType.POLYGON]: (overlay, coordinates) => overlay.setPaths(
    toLatLngs.fromPolygon(coordinates)
  ),
};

class Service {
  constructor() {
    Object.assign(this, {
      toLatLngs
    });
  }

  createOverlay({type, coordinates}) {
    var converter = converters[type];
    if(!converter) {
      throw new Error(`Type ${type} not supported`);
    }
    return converter(coordinates);
  }
  
  updateOverlay(overlay, {type, coordinates}) {
    var updater = updaters[type];
    if(!updater) {
      throw new Error(`Type ${type} not supported`);
    }
    return updater(overlay, coordinates);
  }
}

export default Service;
