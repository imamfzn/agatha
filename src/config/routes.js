const { authorizeLogin } = require('../middlewares');

module.exports = {
  '/users': {
    url: process.env.INSAN_URL || 'http://localhost:3002',
    middlewares: [authorizeLogin],
  },
  '/auth': {
    url: process.env.AUTAN_URL || 'http://localhost:3001',
    middlewares: [],
  },
};
