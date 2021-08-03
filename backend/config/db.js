import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongoURI = `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@cluster0.ytrtz.mongodb.net/mechanicsAppDatabase?retryWrites=true&w=majority`

const connectDB = async ()=>{
    try {
        await mongoose.connect(mongoURI, {
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