'use strict';

module.exports = app => {
  if (app.config.gstore.app) require('./lib/gstore')(app);
};
