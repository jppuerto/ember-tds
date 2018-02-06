import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import Ember from 'ember';

const Service=EmberObject.extend({

services: [],

  countActive:Ember.computed('services.@each.active', function () {

    return this.get('services').filterBy('active',true).length;


  }),

sumActive:Ember.computed('services.@each.active',function () {
  let lesServices=this.get('services').filterBy('active',true);
  let sum=0;
  lesServices.forEach(service=> {
      sum+=service.price;
  });
  return sum;
})

});

export default Route.extend({

  model(){
    return Service.create({
      services:[{
        "name": "Web Development",
        "price": 300,
        "active":true
      },{
      "name": "Design",
        "price": 400,
        "active":false
    },{
      "name": "Integration",
        "price": 250,
        "active":false
    },{
      "name": "Formation",
        "price": 220,
        "active":false
    }]
    });
  },

  actions: {
    toggleActive:function (service) {
      Ember.set(service,'active',!service.active);
    }
  }
});
