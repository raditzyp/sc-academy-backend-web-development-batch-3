import express from 'express';
import routes from './routes.js';

const app = express();
const port = 5000;
app.use(routes);
app.listen(port, () => {
    console.log(`server nya jalan cik di port http://localhost:${port}`);
});