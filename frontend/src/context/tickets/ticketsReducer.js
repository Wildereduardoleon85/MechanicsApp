import { 
    GET_TICKETS,
    ADD_TICKET
     } from '../types';


const ticketsReducer = (state, action) => {
    switch(action.type){
        case GET_TICKETS:
            return{
                ...state,
                tickets: action.payload,
                loading: false
            };
        case ADD_TICKET:
            return{
                ...state,
                tickets: [action.payload, ...state.tickets],
                loading: false
            };
        default:
            return  state;
    } 
}

export default ticketsReducer;