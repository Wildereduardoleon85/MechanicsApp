import mongoose from 'mongoose';

const TicketSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    resolved: {
        type: Boolean,
        required: true
    },
    mechanic: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const Ticket = mongoose.model('Ticket', TicketSchema)

export default Ticket;