import express from 'express';
import { router } from './routes/main.routes';
const app = express();

app.use(express.json());
app.use(router)

app.listen(3010, () => console.log('online em: http://localhost:3010'));