'use strict';

module.exports = app => {
  const gstore = app.gstore;
  console.log(gstore, 'gstore.model');
  const MemberSchema = new gstore.Schema({
    name: {
      type: String,
    },
  });

  return gstore.model('Member', MemberSchema);
};
