'use strict';

const path = require('path');
const { Gstore } = require('gstore-node');
const { Datastore } = require('@google-cloud/datastore');

module.exports = app => {
  const { projectId, loadModel } = app.config.gstore;
  const datastore = new Datastore({
    projectId,
  });

  const gstore = new Gstore();
  gstore.connect(datastore);

  app.gstore = gstore;
  app.gstore.loadModel = () => loadModelToApp(app);
  if (loadModel) {
    loadModelToApp(app);
  }
};

function loadModelToApp(app) {
  const dir = path.join(app.config.baseDir, 'app/model');
  app.loader.loadToApp(dir, 'model', {
    inject: app,
    caseStyle: 'upper',
    filter(model) {
      return typeof model === 'function';
    },
  });
}
