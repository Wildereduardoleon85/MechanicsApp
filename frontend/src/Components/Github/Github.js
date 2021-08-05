import React, {useEffect, useContext, useState} from 'react';
import GithubContext from '../../context/github/githubContext';
import GithubItem from './GithubItem';
import Spinner from '../Spinner';

const Github = () => {
    const githubContext = useContext(GithubContext);

    const { loading, commits, getCommits, repo, getRepo, searchCommits} = githubContext;

    const [searchText, setSearchText] = useState('');

    useEffect(()=>{
        getCommits();
        getRepo();
        // eslint-disable-next-line
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        searchCommits(searchText);
    }
    

    if(loading === true || commits === null || repo === null ){
        return <Spinner/>
    }else{
        return (
            <>
                <div className="github container col-xxl-7 mt-5 mb-5">
                    <div className="d-flex align-items-center">
                        <div className="githubLogo">
                            <img src="./img/github.png" alt="Github Logo" />
                        </div>
                        <h2 className="mb-0 ms-4">Commits History</h2>
                    </div>
                    <div className="card mt-3" style={{width: '18 rem'}}>
                        <div className="card-body d-flex align-items-center">
                            <div className="d-flex align-items-center">
                                <div className="avatar">
                                    <img src={repo.owner.avatar_url} alt="Avatar" />
                                </div>
                                <h4 className="mb-0 ms-4 card-title">{repo.name}</h4>
                            </div>
                            <form className="ms-auto" onSubmit={handleSubmit}>
                                <div className="input-group mb-0">
                                    <input 
                                        type="search" 
                                        className="form-control" 
                                        placeholder='Search for commits, e.g "navbar..."' 
                                        aria-label="Recipient's username" 
                                        aria-describedby="basic-addon2"
                                        value={searchText}
                                        onChange={(e)=>setSearchText(e.target.value)}
                                    />
                                    <button 
                                        className="d-flex align-item-center btn btn-primary input-group-text text-light" 
                                        id="basic-addon2"
                                        type="submit"
                                    >
                                        <span className="material-icons">search</span> Search
                                    </button>
                                </div>
                            </form>
                        </div>
                        <ul className="list-group list-group-flush">
                            {commits.map(comm =>(<GithubItem key={comm.node_id} comm={comm}/>))}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Github

