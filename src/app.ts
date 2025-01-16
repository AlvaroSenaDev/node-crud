import express from 'express';
import { router } from './infra/http/routes';

const app = express();
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.json({ message: 'hello, world' })
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));