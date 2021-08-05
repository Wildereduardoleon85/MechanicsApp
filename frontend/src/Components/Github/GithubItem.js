import React from 'react';
import Moment from 'react-moment';

const GithubItem = ({comm}) => {
    const {html_url, commit} = comm;

    return (
        <li className="d-flex align-items-center list-group-item text-primary">
            <div>
                <a style={{textDecoration: 'none'}} href={html_url} target="_blank" rel="noreferrer">
                    <span>{commit.message}</span>
                </a> <br/>
                <span className="text-secondary">commited at &nbsp;
                    <span className="text-dark">
                        <Moment format='MMMM Do YYYY, h:mm:ss a'>{commit.author.date}</Moment>
                    </span>
                </span>
            </div>
            <div className="ms-auto">
                <a href={html_url} target="_blank" rel="noreferrer">
                    <div style={{width:'30px'}}>
                        <img className="w-100" src="./img/githubicon.png" alt="githubIcon"></img>
                    </div>
                </a>
            </div>
        </li>
    )
}

export default GithubItem
