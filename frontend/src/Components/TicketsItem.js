import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const TicketsItem = ({ticket}) => {
    const {message, resolved, _id, mechanic, date} = ticket

    return (
        <li 
            className={`d-flex align-items-center list-group-item ${resolved ? 'text-primary' : 'text-danger'}`}
        >
            <div>
                <span style={{cursor:'pointer'}}>{message}</span> <br/>
                <span className="text-dark" style={{fontWeight: '500'}}>
                    Ticket ID# {_id.substring(_id.length-6)}
                </span>
                <span className="text-secondary">
                    &nbsp;last updated by 
                    <span style={{fontWeight: '500'}}className="text-dark">&nbsp;{mechanic}</span>
                    &nbsp;at
                    <span>&nbsp;<Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment></span>
                </span>
            </div>
            
            <div className="ms-auto">
                {
                    resolved ? <span className="material-icons text-success">verified</span> 
                : 
                    <span className="material-icons text-warning">pending_actions</span>
                }
                <span style={{cursor:'pointer'}} className="material-icons text-secondary ms-3">delete</span>
            </div>
        </li>
    )
}

TicketsItem.propTypes = {
    ticket: PropTypes.object.isRequired
}

export default TicketsItem



