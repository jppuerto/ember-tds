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
  }
});
