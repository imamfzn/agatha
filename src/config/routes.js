const { authorizeLogin } = require('../middlewares');

module.exports = {
  '/users': {
    url: process.env.INSAN_URL || 'http://localhost:3002',
    middlewares: [authorizeLogin],
  },
  '/login': {
    url: process.env.AUTAN_URL || 'http://localhost:3001',
    middlewares: [],
  },
  '/refresh-token': {
    url: process.env.AUTAN_URL || 'http://localhost:3001',
    middlewares: [],
  },
  '/revoke-token': {
    url: process.env.AUTAN_URL || 'http://localhost:3001',
    middlewares: [],
  },
};
