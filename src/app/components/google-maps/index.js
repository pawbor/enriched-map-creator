import angular from 'angular';
import map from './map';
import overlay from './overlay';
import listener from './listener';
import transclude from './transclude';

const module = angular
.module('google-maps', [
  map,
  overlay,
  listener,
  transclude,
])
.name;

export default module;
