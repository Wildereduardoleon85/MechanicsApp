import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log('Mongo DB connected');
    } catch (error) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;