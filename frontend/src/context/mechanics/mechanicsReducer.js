import { 
    GET_MECHANICS
     } from '../types';


const ticketsReducer = (state, action) => {
    switch(action.type){
        case GET_MECHANICS:
            return{
                ...state,
                mechanics: action.payload,
                loading: false
            };
        default:
            return  state;
    } 
}

export default ticketsReducer;