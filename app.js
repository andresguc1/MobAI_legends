import express from 'express';
import routes from './src/routes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});