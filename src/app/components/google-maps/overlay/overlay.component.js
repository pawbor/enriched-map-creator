import template from './overlay.html';

class controller {
  $onChanges(changes) {
    this.onOverlayChange(changes);
  }

  $onDestroy() {
    this.overlay && this.overlay.setMap(null);
  }

  onOverlayChange({overlay = {}}) {
    var {currentValue, previousValue} = overlay;
    if(!overlay.isFirstChange()) {
      previousValue.setMap(null);
    }
    if(currentValue) {
      currentValue.setMap(this.mapCtrl.map);
    }
  }
}

const component = {
  require: {
    mapCtrl: '^^pbGmMap'
  },
  bindings: {
    overlay: '<'
  },
  template,
  controller,
  transclude: true
};

export default component;
