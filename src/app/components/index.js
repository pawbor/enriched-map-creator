import angular from 'angular';
import mapEditor from './map-editor';
import googleMaps from './google-maps';

const module = angular
.module('components', [
  mapEditor,
  googleMaps
])
.name;

export default module;
