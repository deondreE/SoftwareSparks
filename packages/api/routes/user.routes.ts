import  Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
    res.send('User Route');
});

export default router;