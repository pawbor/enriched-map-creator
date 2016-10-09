'use strict';
import angular from 'angular';
import appModule from './app';

angular.element(document).ready(function () {
  angular.bootstrap(document, [appModule], {
    strictDi: true
  });
});
