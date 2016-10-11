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
  return {
    overlays: state.mapEditor.overlays.map(createMarker)
  };
}

function createMarker(position) {
  return new gMaps.Marker({
    position: position
  });
}

const component = {
  template,
  controller
};

export default component;
