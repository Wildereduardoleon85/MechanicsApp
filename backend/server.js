import express from 'express';
import ticketsRoutes from './routes/tickets.js';
import mechanicsRoutes from './routes/mechanics.js';
import connectDB from './config/db.js';

//Initializations
const app = express();

//Connect Database
connectDB();

//Middlewares
app.use(express.json({extended: false}));

// Routes:
app.use('/api/v1/tickets', ticketsRoutes);
app.use('/api/v1/mechanics', mechanicsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`))