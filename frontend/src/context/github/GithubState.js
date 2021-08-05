import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import githubReducer from './githubReducer';
import { 
    GET_COMMITS,
    GET_REPO,
    SEARCH_COMMITS
    } from '../types';

const GithubState = props => {
    const initialState = {
        commits: [],
        loading: true,
        repo: []
    };

    const [state, dispatch] = useReducer(githubReducer, initialState);

    // Get Commits
    const getCommits = async () => {
        const url = 'https://api.github.com/search/commits?q=repo:wildereduardoleon85/'+
                    'MechanicsApp author-date:2021-08-03..2021-08-06&sort=author-date&order=desc'
        const config = {
            headers: {
                'Accept': 'application/vnd.github.cloak-preview+json'
            }
        }
        const res = await axios.get(url, config);
        dispatch({type: GET_COMMITS, payload: res.data.items});
    };


    // Search Commits
    const searchCommits = async (text) => {
        const url = `https://api.github.com/search/commits?q=${text} repo:wildereduardoleon85/`+
                    'MechanicsApp author-date:2021-08-03..2021-08-06&sort=author-date&order=desc'
        const config = {
            headers: {
                'Accept': 'application/vnd.github.cloak-preview+json'
            }
        }
        const res = await axios.get(url, config);
        dispatch({type: SEARCH_COMMITS, payload: res.data.items});
    };


    // Get Repo Info
    const getRepo = async ()=> {
        const res = await axios.get('https://api.github.com/repos/wildereduardoleon85/MechanicsApp');
        dispatch({type: GET_REPO, payload: res.data});
    }
    

    return (
        <GithubContext.Provider 
            value={{
                commits: state.commits,
                loading: state.loading,
                repo: state.repo,
                getCommits,
                getRepo,
                searchCommits
            }}
        >
            {props.children}
        </GithubContext.Provider>
    )
};

export default GithubState;