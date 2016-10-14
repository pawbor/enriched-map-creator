export const ADD_FEATURE = 'enriched-map.add-feature';

export function addFeature(feature) {
  return {
    type: ADD_FEATURE,
    payload: feature
  };
}
