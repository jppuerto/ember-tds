import Route from '@ember/routing/route';

export default Route.extend({

  actions:{
    save:function(){
      var model = this.modelFor(this.routeName);
      model.set("name", model.get("newName"));
      this.transitionTo("user");
    }
  }
});
