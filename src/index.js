const app = require('./app');

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`App is running at http://localhost:${app.get('port')}`);
});
