import React, {useEffect, useContext, useState, useRef} from 'react';
import GithubContext from '../../context/github/githubContext';
import GithubItem from './GithubItem';
import Spinner from '../Spinner';

const Github = () => {
    const githubContext = useContext(GithubContext);

    const { loading, commits, getCommits, repo, getRepo, searchCommits, 
            filterCommits, clearCommitsFilter, filteredCommits} = githubContext;

    const text = useRef('');

    useEffect(()=>{
        getCommits();
        getRepo();
        // eslint-disable-next-line
    },[])

    const [searchText, setSearchText] = useState('');

    /* const handleSubmit = e => {
        e.preventDefault();
        searchCommits(searchText);
    } */

    const handleChange = e => {
        if(text.current.value !== ''){
            filterCommits(e.target.value)
        }else{
            clearCommitsFilter()
        }
    }

    if(loading === true || commits === null || repo === null ){
        return <Spinner/>
    }else{
        return (
            <>
                <div className="tickets container col-7 mt-5 mb-5">
                    <div className="d-flex align-items-center">
                        <div className="githubLogo">
                            <img src="./img/github.png" alt="Github Logo" />
                        </div>
                        <h2 className="mb-0 ms-4">Commits History</h2>
                    </div>
                    <div className="card mt-3" style={{width: '18 rem'}}>
                        <div className="card-body d-flex align-items-center">
                            <div className="avatar">
                                <img src={repo.owner.avatar_url} alt="Avatar" />
                            </div>
                            <h4 className="mb-0 ms-4 card-title">{repo.name}</h4>
                            <div className="input-group mb-0 ms-auto" style={{width: '340px'}}>
                                <input 
                                    type="search" 
                                    className="form-control" 
                                    placeholder='Search for commits, e.g "navbar..."' 
                                    aria-label="Recipient's username" 
                                    aria-describedby="basic-addon2"
                                    ref={text}
                                    onChange={handleChange}
                                />
                                <span 
                                    className="d-flex align-item-center bg-primary input-group-text text-light" 
                                    id="basic-addon2"
                                >
                                    <span className="material-icons">search</span>
                                </span>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush">
                            {filteredCommits !== null ? 
                                filteredCommits.map(comm =>(<GithubItem key={comm.node_id} comm={comm}/>))
                            :
                                commits.map(comm =>(<GithubItem key={comm.node_id} comm={comm}/>))}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Github

