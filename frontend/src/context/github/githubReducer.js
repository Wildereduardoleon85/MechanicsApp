import { 
    GET_COMMITS, 
    GET_REPO,
    SEARCH_COMMITS,
    CLEAR_COMMITS_FILTER,
    FILTER_COMMITS
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
        case SEARCH_COMMITS:
            return{
                ...state,
                commits: action.payload,
                loading: false
            };
        case FILTER_COMMITS:
            return{
                ...state,
                filteredCommits: state.commits.filter(c => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return c.commit.message.match(regex)
                }),
                loading: false
            };
        case CLEAR_COMMITS_FILTER:
            return{
                ...state,
                filtered: null,
            };
        default:
            return  state;
    } 
}

export default githubReducer;