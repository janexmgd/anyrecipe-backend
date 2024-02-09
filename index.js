import appEnv from './env.js';
import main from './src/main.js';

const PORT = appEnv.APP_PORT || 3009

main.listen(PORT, '0.0.0.0', () => {
  process.stdout.write('\x1Bc');
  console.log(`${appEnv.APP_NAME} running, Listened at PORT ${PORT}`);
});
