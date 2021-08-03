import mongoose from 'mongoose';

const MechanicSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

export default mongoose.model('mechanic', MechanicSchema);