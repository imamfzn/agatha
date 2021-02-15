const proxy = require('./lib/proxy');
const configRoutes = require('./config/routes');

module.exports = function routes(app) {
  if (!app) {
    throw new Error('express app need to defined.');
  }

  Object.keys(configRoutes).forEach((path) => {
    const { url, middlewares } = configRoutes[path];
    app.use(path, middlewares || [], proxy(url));
  });
};
