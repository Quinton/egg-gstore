'use strict';

const mock = require('egg-mock');
const assert = require('assert');

describe('test/gstore.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/gstore-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('base:', async () => {
    await new app.model.Member({ name: '66' }).save();
    const result = await app.model.Member.list();
    assert(result && result.entities.length > 0);
  });
});
