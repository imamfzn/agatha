const httpProxy = require('express-http-proxy');
const logger = require('./logger');

module.exports = function proxy(url) {
  return httpProxy(url, {
    timeout: 10000,
    proxyReqPathResolver: (req) => req.originalUrl,
    proxyErrorHandler: (err, res, next) => {
      logger.error(err);
      next(new Error('Something wrong'));
    },
  });
};
