import gMaps from 'libs/google-maps';

import template from './map-editor.html';
import styles from './map-editor.scss';

class controller {
  constructor($ngRedux) {
    'ngInject';
    this.styles = styles;
    this.redux = $ngRedux;
  }

  $onInit() {
    var actions = {};
    this.disconnect = this.redux.connect(mapState, actions)(this);
  }

  $onDestroy() {
    this.disconnect();
  }
}

function mapState(state) {
  var layers = state.currentEnrichedMap.layers.map(processLayer);
  return {layers};
}

function processLayer(layer) {
  var overlays = layer.overlays.map(createMarker);
  return Object.assign({}, layer, {overlays});
}

function createMarker(overlay) {
  var [lng, lat] = overlay.coordinates;
  return new gMaps.Marker({
    position: {lng, lat}
  });
}

const component = {
  template,
  controller
};

export default component;
