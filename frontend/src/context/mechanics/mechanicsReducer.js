import { 
    GET_MECHANICS,
    ADD_MECHANIC
     } from '../types';


const mechanicsReducer = (state, action) => {
    switch(action.type){
        case GET_MECHANICS:
            return{
                ...state,
                mechanics: action.payload,
                loading: false
            };
        case ADD_MECHANIC:
            return{
                ...state,
                mechanics: [action.payload, ...state.mechanics],
                loading: false
            };
        default:
            return  state;
    } 
}

export default mechanicsReducer;