import angular from 'angular';
import map from './map';
import geoJsonOverlay from './geo-json-overlay';
import overlay from './overlay';
import listener from './listener';
import transclude from './transclude';

const module = angular
.module('google-maps', [
  map,
  geoJsonOverlay,
  overlay,
  listener,
  transclude,
])
.name;

export default module;
