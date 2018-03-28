import DS from 'ember-data';

export default DS.Model.extend({
  identity:DS.attr('string'),
  toString(){
    return this.get('identity');
  }
});
