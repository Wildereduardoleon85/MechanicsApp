import express from 'express';

const router = express.Router();


// @route POST /api/v1/tickets
// @desc register a ticket
router.get('/', (req, res)=>{
    res.send('tickets works')
});

export default router;