import main from './src/main.js';
const PORT = 3007;
main.listen(PORT, '0.0.0.0', () => {
  console.log(`Listened at ${PORT}`);
});
