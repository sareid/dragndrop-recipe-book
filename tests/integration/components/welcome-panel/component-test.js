import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('welcome-panel', 'Integration | Component | welcome panel', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{welcome-panel}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#welcome-panel}}
      template block text
    {{/welcome-panel}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
