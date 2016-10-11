import angular from 'angular';
import transclude from '../transclude';

import map from './map.component';
import mapsPool from './maps-pool.service.js';

const module = angular
.module('google-maps.map', [
  transclude
])
.component('pbGmMap', map)
.service('pbGmMapsPool', mapsPool)
.name;

export default module;
