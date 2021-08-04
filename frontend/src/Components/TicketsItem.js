import React from 'react'

const TicketsItem = ({ticket}) => {
    const {message, resolved, _id, mechanic} = ticket

    return (
        <li 
            className={`d-flex align-items-center list-group-item ${resolved ? 'text-primary' : 'text-danger'}`}
            style={{cursor: 'pointer'}}
        >
            <div>
                {message} <br/>
                <span className="text-dark" style={{fontWeight: '500'}}>
                    Ticket ID# {_id.substring(_id.length-6)}
                </span>
                <span className="text-secondary">
                    &nbsp;last updated by 
                    <span style={{fontWeight: '500'}}className="text-dark"> {mechanic}</span>
                </span>
            </div>
            
            <div className="ms-auto">
                {
                    resolved ? <span className="material-icons text-success">verified</span> 
                : 
                    <span className="material-icons text-warning">pending_actions</span>
                }
                <span class="material-icons text-secondary ms-3">delete</span>
            </div>
        </li>
    )
}

export default TicketsItem



