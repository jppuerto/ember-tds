import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.get('store').findAll('developer');
  },
  actions:{
    delete(dev){
      dev.deleteRecord();
      dev.save();
    }
  }
});
