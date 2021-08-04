import React, {useReducer} from 'react';
import axios from 'axios';
import TicketsContext from './ticketsContext';
import ticketsReducer from './ticketsReducer';
import { 
    GET_TICKETS,
    ADD_TICKET
    } from '../types';

const TicketsState = props => {
    const initialState = {
        tickets: [],
        loading: true,
        error: null
    };

    const [state, dispatch] = useReducer(ticketsReducer, initialState);

    // Get Tickets
    const getTickets = async () => {
        const res = await axios.get('/api/v1/tickets');
        dispatch({type: GET_TICKETS, payload: res.data});
    };
        
    //Add Ticket
    const addTicket = async ticket => {
        const config = {
            headers: {
                'Cotent-type': 'application/json'
            }
        }
        const res = await axios.post('/api/v1/tickets', ticket, config);
        dispatch({type: ADD_TICKET, payload: res.data});
    };

    //Delete Ticket
    

    //Update Ticket
    

    // Clear Tickets
    

    //Set current Ticket
   

    //Clear current ticket
    

    //Filter tickets
    

    //Clear Filter
    

    return (
        <TicketsContext.Provider 
            value={{
                tickets: state.tickets,
                loading: state.loading,
                error: state.error,
                getTickets,
                addTicket
            }}
        >
            {props.children}
        </TicketsContext.Provider>
    )
};

export default TicketsState;