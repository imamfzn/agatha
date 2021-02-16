const jwt = require('express-jwt');

function getToken(req) {
  return req.headers['x-access-token'] || req.headers.authorization;
}

function authorize(roles = []) {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return [
    // authenticate jwt token
    jwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ['HS256'], getToken }),

    // authorize user role
    async function (req, res, next) {
      if (!req.user || (roles.length && !roles.includes(req.user.role))) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
      }

      next();
    },
  ];
}

module.exports = authorize;
