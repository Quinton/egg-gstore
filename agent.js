'use strict';

module.exports = agent => {
  if (agent.config.gstore.agent) require('./lib/gstore')(agent);
};
