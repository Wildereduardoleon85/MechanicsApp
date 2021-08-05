import express from 'express';
import ticketsRoutes from './routes/tickets.js';
import mechanicsRoutes from './routes/mechanics.js';
import connectDB from './config/db.js';
import path from 'path'

//Initializations
const app = express();

//Connect Database
connectDB();

//Middlewares
app.use(express.json({extended: false}));

// Routes:
app.use('/api/v1/tickets', ticketsRoutes);
app.use('/api/v1/mechanics', mechanicsRoutes);

// Set current path
const __dirname = path.resolve();

// Heroku configuration
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`))