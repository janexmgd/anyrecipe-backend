import express from './apps/express.js';
import swaggerUi from 'swagger-ui-express'
import docs from '../swaggerUI.json' assert {type: 'json'}
import router from './routes/index.js';
import { success, failed } from './helpers/response.js'
import cors from 'cors'
const main = express();
main.use(router)
main.use(cors())
main.disable('x-powered-by');
main.get('/', (req, res, next) => {
  res.status(200).json({
    data: '',
    message: 'success',
  });
});
main.use('/docs', swaggerUi.serve, swaggerUi.setup(docs))
main.all('*', (req, res, next) => {
  failed(res, {
    code: 404,
    message: 'Not found',
  });
});

main.use((err, req, res, next) => {
  // Kirim tanggapan dalam format JSON
  res.status(err.status || 500).json({
    error: {
      status: err.status || 500,
      message: err.message,
      additionalInfo: err.additionalInfo || null,
    },
  });
});
export default main;
