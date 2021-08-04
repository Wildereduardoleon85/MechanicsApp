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

// @route   GET /api/v1/tickets
// @desc    Get all tickets 
router.get('/', async(req, res)=>{
    try {
        const tickets = await Ticket.find().sort({date: -1});
        res.json(tickets);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

export default router;