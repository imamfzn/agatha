module.exports = function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'something wrong.';

  return res.status(statusCode).json({ message });
};
