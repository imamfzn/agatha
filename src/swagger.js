const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load(`${__dirname}/config/swagger.yml`);

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
