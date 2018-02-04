import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

const Note=EmberObject.extend({

  size: computed('content','info', function () {
    if(this.get('content').length >0)
      this.set('info','Note modifiée');
    return this.get('MAX')-this.get('content').length;
  }),
  alertVisible:computed.notEmpty('info'),
  colorinfo: computed('size',function(){
    let size=this.get('size');
    let style='alert-info';
    if(size<50)
      style='alert-warning';
    if(size<20)
      style='alert-danger';
    return style;
  })

});

export default Route.extend({
  model(){
    return Note.create({
      MAX:100,
      content:'',
      info:''
    });
  },
  actions: {
    save:function(model) {
      model.set('info','Note sauvegardée');
      alert('saved ');

    },
    clear:function(model){
      model.set('content','');
      model.set('info','');
    },
    getText:function(model){
      return model.content;
    }
  }
});
