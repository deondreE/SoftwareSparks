import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// import routes
import user from './routes/user.routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// use error handler
// app.use(ErrorHandler({ log: true }));

// routes 
app.use('/user', user);

app.get('/', (req: Request, res: Response) => {
    res.send('Express + Typescript!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});