import express from 'express';
import ticketsRoutes from './routes/tickets.js';
import mechanicsRoutes from './routes/mechanics.js';

const app = express();

app.get('/', (req, res)=>{
    res.json({msg: 'Hello World'})
});

// Routes:
app.use('/api/v1/tickets', ticketsRoutes);
app.use('/api/v1/mechanics', mechanicsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port: ${PORT}`))