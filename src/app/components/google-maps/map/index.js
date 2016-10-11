import angular from 'angular';

import map from './map.component';
import mapsPool from './maps-pool.service.js';

const module = angular
.module('google-maps.map', [])
.component('pbGmMap', map)
.service('pbGmMapsPool', mapsPool)
.name;

export default module;
