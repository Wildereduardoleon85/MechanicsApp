import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import githubReducer from './githubReducer';
import { 
    GET_COMMITS,
    GET_REPO
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
        const url = 'https://api.github.com/search/commits?q=repo:wildereduardoleon85/MechanicsApp author-date:2021-08-03..2021-08-06'
        const config = {
            headers: {
                'Accept': 'application/vnd.github.cloak-preview+json'
            }
        }
        const res = await axios.get(url, config);
        dispatch({type: GET_COMMITS, payload: res.data.items});
    };

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
                getRepo
            }}
        >
            {props.children}
        </GithubContext.Provider>
    )
};

export default GithubState;