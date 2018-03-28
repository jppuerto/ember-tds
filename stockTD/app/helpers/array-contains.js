import Ember from 'ember';

export function arrayContains(params) {
  const [items, value] = params;
  return items.includes(value);
}

export default Ember.Helper.helper(arrayContains);
