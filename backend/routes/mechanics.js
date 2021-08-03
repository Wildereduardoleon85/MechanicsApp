import express from 'express';
import Mechanic from '../models/mechanicModel.js';

const router = express.Router();

// @route POST /api/v1/mechanics
// @desc register a ticket
router.post('/', async(req, res)=>{
    
    const { firstName, lastName } = req.body;

    try{
        const newMechanic = new Mechanic({
            firstName: firstName,
            lastName: lastName
        });

        const mechanic = await newMechanic.save();
        res.json(mechanic);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    } 
});


// @route   GET /api/v1/mechanics
// @desc    Get all mechanics 
router.get('/', async(req, res)=>{
    try {
        const mechanics = await Mechanic.find();
        res.json(mechanics);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

export default router;