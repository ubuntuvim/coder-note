import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | markdown-editor', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:markdown-editor');
    assert.ok(service);
  });
});

