import Route from '@ember/routing/route';
import  RSVP from 'rsvp';
import EmberObject from '@ember/object';
export default Route.extend({
  model() {
    return RSVP.hash({
        project: EmberObject.create(),
        developers: this.get('store').findAll('developer')
      }
    );
  },
  actions:{
    save(proj){
      proj=this.get('store').createRecord('project',JSON.parse(JSON.stringify(proj)));
      proj.save().then(()=>{
        this.transitionTo("projects");
      });
    },
    didTransition() {
      Ember.run.next(this, 'initUI');
    }
  },
  initUI() {
    Ember.$('.ui.dropdown').dropdown();
  }
});
