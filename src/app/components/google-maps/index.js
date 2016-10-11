import angular from 'angular';
import map from './map';

const module = angular
.module('google-maps', [
  map
])
.name;

export default module;
