import { 
    GET_TICKETS,
    ADD_TICKET,
    SET_EDITMODALON,
    SET_EDITMODALOFF,
    GET_SINGLE_TICKET,
    CLEAR_SINGLE,
    UPDATE_TICKET,
    DELETE_TICKET
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
        case SET_EDITMODALON:
            return{
                ...state,
                showEditModal: true
            };
        case SET_EDITMODALOFF:
            return{
                ...state,
                showEditModal: false
            };
        case GET_SINGLE_TICKET:
        return{
            ...state,
            singleTicket: action.payload,
            loading: false
        };
        case CLEAR_SINGLE:
        return{
            ...state,
            singleTicket: {
                message: '',
                resolved: false,
                mechanic: ''
            }
        };
        case UPDATE_TICKET:
        return{
            ...state,
            showEditModal: false,
            singleTicket: [],
            loading: false
        };
        case DELETE_TICKET:
        return{
            ...state,
            showEditModal: false,
            loading: false
        };
        default:
            return  state;
    } 
}

export default ticketsReducer;