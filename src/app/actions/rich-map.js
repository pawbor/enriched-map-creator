export const Action = {
  ADD_MAP: 'rich-map.add',
  REMOVE_MAP: 'rich-map.remove'
};

export function createMap() {
  var mapId = getTemporaryId();
  var map = {
    id: mapId,
    basicInfo: {}
  };
  return addMap({
    mapId,
    map
  });
}

export function addMap(payload) {
  return {
    type: Action.ADD_MAP,
    payload
  };
}

export function removeMap(payload) {
  return {
    type: Action.REMOVE_MAP,
    payload
  };
}

var counter = 0;
function getTemporaryId() {
  return `tempId:${counter++}`;
}
