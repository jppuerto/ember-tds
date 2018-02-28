import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.get('store').findAll('project');
  },

  actions:{
    didTransition() {
      Ember.run.next(this,'initDropDown');
    }
  },
  initDropDown(){
    Ember.$('.ui.dropdown').dropdown();
  }

});

