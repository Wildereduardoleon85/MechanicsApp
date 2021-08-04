import { 
    GET_TICKETS
     } from '../types';


const ticketsReducer = (state, action) => {
    switch(action.type){
        case GET_TICKETS:
            return{
                ...state,
                tickets: action.payload,
                loading: false
            };
        default:
            return  state;
    } 
}

export default ticketsReducer;