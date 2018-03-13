import Component from '@ember/component';

export default Component.extend({
  developerToDelete: null,
  actions:{
    setDeveloperToDelete(developer) {
      this.set('developerToDelete', developer);
    },
    cancelDeletingDeveloper() {
      this.set('developerToDelete', null);
    },
    deleteDeveloper() {
      this.developerToDelete.destroyRecord();
      Ember.set(this, 'developerToDelete', false);
    }
  }
});
