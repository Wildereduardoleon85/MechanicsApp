import { 
    GET_COMMITS, 
    GET_REPO
     } from '../types';


const githubReducer = (state, action) => {
    switch(action.type){
        case GET_COMMITS:
            return{
                ...state,
                commits: action.payload,
                loading: false
            };
        case GET_REPO:
            return{
                ...state,
                repo: action.payload,
                loading: false
            };
        default:
            return  state;
    } 
}

export default githubReducer;