import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),

  actions: {
    createIngredient(name) {
      var store = this.get('store');
      var ingredient = store.createRecord('ingredient');
      ingredient.set('name', name);
      ingredient.save();
      this.set('ingredientName', '');
    }
  }
});
