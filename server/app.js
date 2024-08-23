import e from 'express';
import cors from 'cors';
import postRoutes from './routes/post.routes.js';
import dalleRoutes from './routes/dalle.routes.js';

const app = e();

app.use(cors());
app.use(e.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  res.send('Hello from DALL-E!');
});

export default app;
