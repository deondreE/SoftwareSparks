import express from 'express';
const app = express();
import morgan from 'morgan';

// Route imports
import setupRoutes from '../routes/setup';
import authRoutes from '../routes/authentication';
import codeRoutes from '../routes/runCode';

// Route setup
app.use(express.json());
app.use(morgan('dev'));
// ROUTES
app.use('/', setupRoutes);
app.use('/auth', authRoutes);
app.use('/code', codeRoutes);

app.listen(3000, () => {
    console.log(`App listening at http://localhost:3000`);
});