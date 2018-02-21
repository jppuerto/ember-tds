import Route from '@ember/routing/route';
import Object from '@ember/object';
import {computed} from '@ember/object';


const Contacts=Object.extend({
  contacts:computed('filter','datas.@each.isDeleted',function(){
  let all=this.get('datas').filterBy('isDeleted',false);
  let filter=this.get('filter');
  if(filter)
    return all.filter(
      (contact)=>{
        return contact.get('nom').includes(filter);
      });
  return all;
  })
});

export default Route.extend({

  model(){
    return Contacts.create({datas: this.get('store').findAll('contact')})
  },
  actions:{
    delete:function (contact) {
      contact.deleteRecord();
    }

  }
});
