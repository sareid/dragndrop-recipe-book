import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return Ember.RSVP.hash({
      recipe: this.store.findRecord('recipe', params.recipe_id),
      ingredients: this.store.findAll('ingredient')
    });
  },

  actions: {
    addIngredient(ingredientId, recipeId){
      let recipe = this.get('store').peekRecord('recipe', recipeId);
      let ingredient = this.get('store').peekRecord('ingredient', ingredientId);
      recipe.get('ingredients').pushObject(ingredient);
      recipe.save();
    },
    removeIngredient(ingredientId, recipeId){
      let recipe = this.get('store').peekRecord('recipe', recipeId);
      let ingredient = this.get('store').peekRecord('ingredient', ingredientId);
      recipe.get('ingredients').removeObject(ingredient);
      recipe.save();
    }
  }
});
