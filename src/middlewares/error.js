module.exports = function errorHandler(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).send({ message: err.message });
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something wrong.';

  return res.status(statusCode).json({ message });
};
