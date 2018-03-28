import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
      tags:this.get('store').findAll('tag'),
      fields:['title','color',{name:'title',component:'lbl-value',caption:'Labeled identity'}],
      //operations:[{icon:'red remove',link:'tags.delete'},{icon:'edit',link:'tags.update'}]
    });
  }
});
