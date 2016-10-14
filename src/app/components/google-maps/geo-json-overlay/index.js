import angular from 'angular';

import geoJsonOverlay from './geo-json-overlay.component';
import GeoJsonOverlayService from './geo-json-overlay.service';

const module = angular
.module('google-maps.geo-json-overlay', [])
.component('pbGmGeoJsonOverlay', geoJsonOverlay)
.service('pbGmGeoJsonOverlayService', GeoJsonOverlayService)

.name;

export default module;
