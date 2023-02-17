import express from 'express';
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.json({ msg: 'online' }));

app.listen(3010, () => console.log('online em: http://localhost:3010'));