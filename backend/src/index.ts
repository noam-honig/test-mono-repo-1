import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { remultExpress } from 'remult/remult-express';
import '@xyz/shared';

const app = express();
let api = remultExpress();
app.use(api);
app.use('/api/docs', swaggerUi.serve,
    swaggerUi.setup(api.openApiDoc({ title: 'remult-react-todo' })));
app.listen(3002, () => console.log("Server started"));
