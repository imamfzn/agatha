require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const logger = require('./lib/logger');
const { requestLog, errorHandler } = require('./middlewares');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(requestLog);

// setup all api proxy routes
routes(app);

app.use(errorHandler);

app.listen(port, () => logger.info(`agatha is running on port ${port}`));
