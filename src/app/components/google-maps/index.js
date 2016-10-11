import angular from 'angular';
import map from './map';
import overlay from './overlay';
import transclude from './transclude';

const module = angular
.module('google-maps', [
  map,
  overlay,
  transclude,
])
.name;

export default module;
