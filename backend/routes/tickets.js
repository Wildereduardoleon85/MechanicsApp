import express from 'express';

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('tickets works')
});

export default router;