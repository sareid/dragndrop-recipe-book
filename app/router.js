import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('recipes', function() {
    this.route('recipe', {
      path: ':recipe_id'
    });
    this.route('new');
  });
  this.route('ingredients', function() {
    this.route('ingredient', {
      path: ':ingredient_id'
    });
  });
});

export default Router;
