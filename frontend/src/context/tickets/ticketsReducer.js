import { 
    GET_TICKETS
     } from '../types';


export default (state, action) => {
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