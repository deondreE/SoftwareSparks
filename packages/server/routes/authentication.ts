import express from 'express';
const router = express.Router();

import { createUser, getAllUsers, removeAllUsers } from '../utils/user.package';

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/users', async (req, res) => {
   res.json({
         users: await getAllUsers(),
   })
});

router.get('/delete', async (req, res) => {
    res.json({
        message: await removeAllUsers(),
    });
});

router.post('/create', async (req, res) => {
    res.json({
        user: await createUser(req.body.email, req.body.name),
    });
});

export default router;