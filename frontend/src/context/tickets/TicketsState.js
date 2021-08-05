import React, {useReducer} from 'react';
import axios from 'axios';
import TicketsContext from './ticketsContext';
import ticketsReducer from './ticketsReducer';
import { 
    GET_TICKETS,
    ADD_TICKET,
    SET_EDITMODALON,
    SET_EDITMODALOFF,
    GET_SINGLE_TICKET,
    CLEAR_SINGLE,
    UPDATE_TICKET,
    DELETE_TICKET,
    FILTER_TICKETS,
    CLEAR_FILTER
    } from '../types';

const TicketsState = props => {
    const initialState = {
        tickets: null,
        singleTicket:{
            message: '',
            mechanic: '',
            resolved: false
        },
        loading: true,
        showEditModal: false,
        filtered: null
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

    //ShowEdit Modal
    const setEditModalOn = () => {
        dispatch({type: SET_EDITMODALON});
    }

    //CloseEdit Modal
    const setEditModalOff = () => {
        dispatch({type: SET_EDITMODALOFF});
    }
    
    //Set current Ticket
    const getSingleTicket = async (id) => {
        const res = await axios.get(`/api/v1/tickets/${id}`);
        dispatch({type: GET_SINGLE_TICKET, payload: res.data});
    };

    //Update Ticket
    const updateTicket = async (ticket, id) => {
        const config = {
            headers: {
                'Cotent-type': 'application/json'
            }
        }
        const res = await axios.put(`/api/V1/tickets/${id}`, ticket, config);
        dispatch({type: UPDATE_TICKET, payload: res.data});
    };

    // Delete Ticket
    const deleteTicket = async id => {
        await axios.delete(`/api/v1/tickets/${id}`);
        dispatch({type: DELETE_TICKET});
    };

    //Clear current ticket
    const clearSingle = () => {
        dispatch({type: CLEAR_SINGLE})
    }

    //Filter tickets
    const filterTickets = (text)=> {
        dispatch({type: FILTER_TICKETS, payload: text})
    }

    //Clear Filter
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER})
    }

    return (
        <TicketsContext.Provider 
            value={{
                tickets: state.tickets,
                loading: state.loading,
                error: state.error,
                getTickets,
                addTicket,
                showEditModal: state.showEditModal,
                setEditModalOn,
                setEditModalOff,
                getSingleTicket,
                singleTicket: state.singleTicket,
                clearSingle,
                updateTicket,
                deleteTicket,
                filtered: state.filtered,
                filterTickets,
                clearFilter
            }}
        >
            {props.children}
        </TicketsContext.Provider>
    )
};

export default TicketsState;