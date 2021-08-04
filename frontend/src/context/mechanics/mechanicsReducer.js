import { 
    GET_MECHANICS
     } from '../types';


const ticketsReducer = (state, action) => {
    switch(action.type){
        case GET_MECHANICS:
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