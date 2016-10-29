import template from './map-editor.html';
import './map-editor.scss';

class controller {
  $onInit() {
    this.features = [];
  }

  $onDestroy() {
    this.disconnect();
  }

  mapClicked({data: [{latLng}]}) {
    var {lat, lng} = latLng.toJSON();
    var coordinates = [lng, lat];
    var geometry = {
      type: 'Point',
      coordinates
    };
    var feature = {geometry};
    this.features.push(feature);
  }

  overlayClicked({target}) {
    var feature = target.externalProperties;
    var index = this.features.indexOf(feature);
    this.features.splice(index, 1);
  }
}

const component = {
  template,
  controller
};

export default component;
