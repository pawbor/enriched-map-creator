import angular from 'angular';

import transclude from './transclude.component';

const module = angular
.module('google-maps.transclude', [])
.component('pbGmTransclude', transclude)
.name;

export default module;
