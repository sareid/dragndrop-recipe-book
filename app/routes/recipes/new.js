import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('recipe');
  },
  actions: {
    createRecipe(){
      let recipe = this.modelFor(this.routeName);
      recipe.save();
      this.transitionTo('recipes');
    }
  }
});
