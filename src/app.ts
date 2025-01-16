import express from 'express';
import { router } from './infra/http/routes';

const app = express();
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.json({ message: 'hello, world' })
});

app.listen(8080, () => console.log('Server is running on http://localhost:8080'));