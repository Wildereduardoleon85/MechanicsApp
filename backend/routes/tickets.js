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

// @route   GET /api/v1/tickets/:id
// @desc    Get current Ticket
router.get('/:id', async(req, res)=>{
    try {
        const ticket = await Ticket.findById(req.params.id);
        res.json(ticket);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route   PUT api/v1/tickets
// @desc    Update ticket
router.put('/:id', async(req, res)=>{
    const {message, mechanic, resolved} = req.body;

    //Build contact object
    const contactFields = {};
    if(message) contactFields.message = message;
    if(mechanic) contactFields.mechanic = mechanic;
    if(resolved) contactFields.resolved = resolved;

    try {
        let ticket = await Ticket.findById(req.params.id);

        if(!ticket) return res.status(404).json({msg: 'Ticket not found'});

        ticket = await Ticket.findByIdAndUpdate(req.params.id, 
            {$set: contactFields},
            {new: true});
            res.json(ticket);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route   DELETE api/v1/tickets
// @desc    Delete ticket
router.delete('/:id', async(req, res)=>{
    try {
        let ticket = await Ticket.findById(req.params.id);

        if(!ticket) return res.status(404).json({msg: 'Ticket not found'});

        await Ticket.findByIdAndRemove(req.params.id);
        res.json({msg: 'Ticket Removed'})

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

export default router;