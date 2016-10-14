import template from './geo-json-overlay.html';

class controller {
  constructor(pbGmGeoJsonOverlayService) {
    'ngInject';

    this.onChange = {
      geometry: (geometry) => {
        var {currentValue = {}, previousValue = {}} = geometry;

        var typeChanged = geometry.isFirstChange()
        || currentValue.type !== previousValue.type;

        if(typeChanged) {
          this.overlay = pbGmGeoJsonOverlayService.createOverlay(currentValue);
          this.overlay.externalProperties = this.properties;
        } else {
          pbGmGeoJsonOverlayService.updateOverlay(this.overlay, currentValue);
        }
      },
      properties: ({currentValue = {}}) => {
        this.overlay && (this.overlay.externalProperties = currentValue);
      }
    };
  }

  $onChanges(changes) {
    Object.keys(changes)
    .forEach(key => {
      var change = changes[key];
      this.onChange[key](change);
    });
  }

  $onDestroy() {
    this.overlay && this.overlay.setMap(null);
  }

}

const component = {
  require: {
    mapCtrl: '^^pbGmMap'
  },
  bindings: {
    geometry: '<',
    properties: '<'
  },
  template,
  controller,
  transclude: true
};

export default component;
