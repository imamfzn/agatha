const { jwt } = require('../middlewares');

const autanUrl = process.env.AUTAN_URL || 'http://localhost:3001';
const insanUrl = process.env.INSAN_URL || 'http://localhost:3002';

module.exports = {
  '/auth/login': { url: autanUrl },
  '/auth/refresh-token': { url: autanUrl },
  '/auth/revoke-token': { url: autanUrl, middlewares: [jwt] },
  '/users': { url: insanUrl, middlewares: [jwt] },
};
