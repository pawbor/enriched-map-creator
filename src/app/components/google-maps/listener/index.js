import angular from 'angular';

import listener from './listener.component';

const module = angular
.module('google-maps.listener', [])
.component('pbGmListener', listener)
.name;

export default module;
