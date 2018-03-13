import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.get('store').findAll('project');
  },

  actions:{
    delete(project){
      project.deleteRecord();
      project.save();
    },
    didTransition() {
      Ember.run.next(this,'initDropDown');
    }
  },
  initDropDown(){
    Ember.$('.ui.dropdown').dropdown();
  }

});

