import gMaps from 'libs/google-maps';
import { addFeature } from 'app/actions/enriched-map';

import template from './map-editor.html';
import styles from './map-editor.scss';

class controller {
  constructor($ngRedux) {
    'ngInject';
    this.styles = styles;
    this.redux = $ngRedux;
  }

  $onInit() {
    var actions = {
      addFeature
    };
    this.disconnect = this.redux.connect(mapState, actions)(this);
  }

  $onDestroy() {
    this.disconnect();
  }

  mapClicked({data: [{latLng}]}) {
    var {lat, lng} = latLng.toJSON();
    var feature = {
      layerId: this.selectedLayer,
      geometry: {
        type: 'Point',
        coordinates: [lng, lat]
      }
    };
    this.addFeature(feature);
  }

  overlayClicked({target}) {
    console.log('overlay clicked', target.getPosition().toString());
  }
}

function mapState(state) {
  return state.enrichedMap;
}

const component = {
  template,
  controller
};

export default component;
