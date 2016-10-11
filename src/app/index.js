import angular from 'angular';
import ngRedux from 'ng-redux';
import createLogger from 'redux-logger';
import uiRouter from 'angular-ui-router';
import ngReduxRouter from 'redux-ui-router';

import reducers from './reducers';
import components from './components';
import AppComponent from './app.component';

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const module = angular
.module('app', [
  ngRedux,
  uiRouter,
  ngReduxRouter,
  components
])
.config(($ngReduxProvider) => {
  'ngInject';
  $ngReduxProvider.createStoreWith(reducers, [logger, 'ngUiRouterMiddleware']);
})
.component('app', AppComponent)
.value('EventEmitter', payload => ({ $event: payload}))
.name;

export default module;
