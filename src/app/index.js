import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';

const root = angular
  .module('app', [
    uiRouter
  ])
  .component('app', AppComponent)
  .name;

export default root;
