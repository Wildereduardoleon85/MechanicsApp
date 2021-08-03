import express from 'express';

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('mechanics works')
});

export default router;