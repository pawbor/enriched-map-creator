import template from './map.html';
import styles from './map.scss';

class controller {
  constructor($element, EventEmitter, pbGmMapsPool) {
    'ngInject';
    this.element = $element;
    this.EventEmitter = EventEmitter;
    this.mapsPool = pbGmMapsPool;
  }

  $onInit() {
    ({id: this.mapId, map: this.map} = this.mapsPool.bookMap());

    var mapDiv = this.map.getDiv();
    this.element.append(mapDiv);
    mapDiv.classList.add(styles.mapContainer);

    let $event = this.EventEmitter({
      mapId: this.mapId
    });
    this.onMapInit($event);
  }

  $onDestroy() {
    this.mapsPool.releaseMap(this.mapId);
  }
}

const component = {
  bindings: {
    onMapInit: '&'
  },
  template,
  controller,
  transclude: true,
};

export default component;
