import angular from 'angular';

import overlay from './overlay.component';

const module = angular
.module('google-maps.overlay', [])
.component('pbGmOverlay', overlay)
.name;

export default module;
