import express from 'express';
import { router } from './routes/Products.routes';
const app = express();

app.use(express.json());
app.use(router)

app.listen(3010, () => console.log('Server online: http://localhost:3010'));