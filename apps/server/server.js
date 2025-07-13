import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/test', (req, res) => {
  res.send('Test upd');
});

app.listen(3000, () => console.log('Server listen 3000'));
