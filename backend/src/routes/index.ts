import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { logger } from '../config/winston';
import * as swaggerDocument from '../../swagger.json';

const router = express.Router();

// swagger 연결
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.get('/', (req, res) => {
  logger.info('GET /');
  res.sendStatus(200);
});

export default router;
