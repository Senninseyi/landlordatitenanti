import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import connectDB from './config/db';
import contactRouter from './routes/contact.route';

connectDB();

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 4400;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use('/api/v1', contactRouter);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
