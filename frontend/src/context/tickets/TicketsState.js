import React, {useReducer} from 'react';
import axios from 'axios';
import TicketsContext from './ticketsContext';
import ticketsReducer from './ticketsReducer';
import { 
    GET_TICKETS,
    TICKET_ERROR
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
        try {
            const res = await axios.get('/api/v1/tickets');
            dispatch({type: GET_TICKETS, payload: res.data});
        } catch (err) {
            dispatch({type: TICKET_ERROR, payload: err.response.msg});
        }
    };
        
    

    //Add Ticket
    

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
                getTickets
            }}
        >
            {props.children}
        </TicketsContext.Provider>
    )
};

export default TicketsState;