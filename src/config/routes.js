const { authorize } = require('../middlewares');

module.exports = {
  '/users': {
    url: process.env.INSAN_URL || 'http://localhost:3002',
    middlewares: [...authorize()],
  },
  '/auth': {
    url: process.env.AUTAN_URL || 'http://localhost:3001',
    middlewares: [],
  },
};
