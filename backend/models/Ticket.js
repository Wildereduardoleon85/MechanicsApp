import mongoose from 'mongoose';

const TicketSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    attention: {
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

export default mongoose.model('ticket', TicketSchema);