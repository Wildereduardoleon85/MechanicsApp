import React, {useEffect, useContext} from 'react';
import TicketsContext from '../context/tickets/ticketsContext';
import TicketsItem from './TicketsItem';

const Tickets = () => {
    const ticketsContext = useContext(TicketsContext);

    const {loading, tickets, getTickets} = ticketsContext

    useEffect(()=>{
        getTickets()
        // eslint-disable-next-line
    },[])

    if(loading === true && tickets.length < 1){
        return <h2>Loading...</h2>
    }else{
        return (
            <div className="tickets container col-7 mt-5">
                <div className="d-flex align-items-center">
                    <div className="carLogo">
                        <img src="./img/carLogo.png" alt="Car Logo" />
                    </div>
                    <h2 className="mb-0 ms-4">Car Workshop</h2>
                    <div className="ms-auto d-flex flex-row">
                        <button className="addTIcket-btn btn-primary ms-3"><span className="material-icons">note_add</span></button>
                        <button className="addMechanic-btn btn-success ms-3"><span className="material-icons">person_add</span></button>
                    </div>
                </div>
                <div className="card mt-3" style={{width: '18 rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Tickets List</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        {tickets.map(ticket=> <TicketsItem key={ticket._id} ticket={ticket}/>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Tickets
