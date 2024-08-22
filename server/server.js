import e from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = e();

app.use(cors());
app.use(e.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
  res.send('Hello from DALL-E!');
});

app.listen(8000, () => {
  console.log('Server has started on port: http://localhost:8000');
});
