'use strict';

module.exports = app => {
  const gstore = app.gstore;
  const MemberSchema = new gstore.Schema({
    name: {
      type: String,
    },
  });

  return gstore.model('Member', MemberSchema);
};
