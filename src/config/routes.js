const { jwt } = require('../middlewares');

module.exports = {
  '/auth': {
    url: process.env.AUTAN_URL || 'http://localhost:3001',
  },
  '/users': {
    url: process.env.INSAN_URL || 'http://localhost:3002',
    middlewares: [jwt],
  }
};
