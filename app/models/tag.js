import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  color: DS.attr('string'),
  toString:function(){
    return this.get('name');
  }
});
