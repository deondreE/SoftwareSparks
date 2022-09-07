import express from 'express';
const app = express();

import setupRoutes from '../routes/setup';
import main from '../db/init';

// Route imports

app.use('/', setupRoutes);

main();

app.listen(3000, () => {
    console.log(`App listening at http://localhost:3000`);
});