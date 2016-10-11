import angular from 'angular';
import map from './map';
import transclude from './transclude';

const module = angular
.module('google-maps', [
  map,
  transclude,
])
.name;

export default module;
