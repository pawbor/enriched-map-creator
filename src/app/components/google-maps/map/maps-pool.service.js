import gMaps from 'libs/google-maps';

class MapPool {
  constructor() {
    this.pool = [];
  }

  getMap(id) {
    var {map} = this.pool[id] || {};
    return map;
  }

  bookMap() {
    var map;
    var id = this.pool.map(({free}) => free).indexOf(true);
    if(id < 0) {
      id = this.pool.length;
      map = createMap();
      this.pool.push({
        free: false,
        map
      });
    } else {
      ({map} = this.pool[id]);
    }
    return {id, map};
  }

  releaseMap(id) {
    (this.pool[id] || {}).free = true;
  }
}

function createMap() {
  var div = document.createElement('div');
  return new gMaps.Map(div, {
    center: {lat: 0, lng: 0},
    zoom: 0
  });
}

export default MapPool;
