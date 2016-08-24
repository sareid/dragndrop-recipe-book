import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return Ember.RSVP.hash({
      recipe: this.store.findRecord('recipe', params.recipe_id),
      ingredients: this.store.findAll('ingredient')
    });
  }
});
