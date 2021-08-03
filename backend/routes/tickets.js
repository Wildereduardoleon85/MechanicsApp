import express from 'express';
import Ticket from '../models/ticketModel.js';

const router = express.Router();

// @route POST /api/v1/tickets
// @desc register a ticket
router.post('/', async(req, res)=>{
    
    const { message, resolved, mechanic } = req.body;

    try{
        const newTicket = new Ticket({
            message: message,
            resolved: resolved,
            mechanic: mechanic
        });

        const ticket = await newTicket.save();
        res.json(ticket);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    } 

});

export default router;