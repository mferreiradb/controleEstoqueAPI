import express from 'express';
import cors from 'cors';
import { router } from './routes';

import swaggerUI from 'swagger-ui-express';
import swaggerJSON from './swagger.json';

const app = express();

app.use(cors())
app.use(express.json());
app.use(router);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON));

app.listen(3010, () => console.log('Server online: http://localhost:3010'));