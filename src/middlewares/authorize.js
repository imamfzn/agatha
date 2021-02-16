const jwt = require('./jwt');

function authorize(roles = []) {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return [
    // authenticate jwt token
    jwt,

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
