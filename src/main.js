import createError from 'http-errors';
import express from './apps/express.js';
import swaggerUi from 'swagger-ui-express'
import docs from '../swaggerUI.json' assert {type:'json'}
const main = express();
main.disable('x-powered-by');
main.get('/', (req, res, next) => {
  res.status(200).json({
    data: '',
    message: 'success',
  });
});
main.use('/docs',swaggerUi.serve,swaggerUi.setup(docs))
main.all('*', (req, res, next) => {
  const err = createError(404, 'Not Found', { additionalInfo: 'Some details' });
  next(err);
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
