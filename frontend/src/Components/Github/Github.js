import React, {useEffect, useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import GithubItem from './GithubItem';
import Spinner from '../Spinner';

const Github = () => {
    const githubContext = useContext(GithubContext);

    const {loading, commits, getCommits, repo, getRepo} = githubContext

    useEffect(()=>{
        getCommits();
        getRepo();
        // eslint-disable-next-line
    },[])

    if(loading === true && commits.length < 1 && repo.length < 1 ){
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
                        </div>
                        <ul className="list-group list-group-flush">
                            {commits.map(comm =>(
                                <GithubItem key={comm.node_id} comm={comm}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Github

