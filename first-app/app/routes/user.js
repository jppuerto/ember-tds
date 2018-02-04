import Route from '@ember/routing/route';



export default Route.extend({
  model(){
    return {
      name:"mr patate",
      skills: ["emberJS","React","Java"]
    }
  }
});
