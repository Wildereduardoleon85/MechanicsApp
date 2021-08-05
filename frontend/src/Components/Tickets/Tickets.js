import React, {useEffect, useContext, useRef} from 'react';
import TicketsContext from '../../context/tickets/ticketsContext';
import AddTicketModal from './AddTicketModal';
import AddMechanicModal from '../Mechanics/AddMechanicModal';
import TicketsItem from './TicketsItem';
import EditTicketModal from './EditTicketModal';
import Spinner from '../Spinner';

const Tickets = () => {
    const ticketsContext = useContext(TicketsContext);

    const {loading, tickets, getTickets, filterTickets, clearFilter, filtered} = ticketsContext

    const text = useRef('');

    useEffect(()=>{
        getTickets()
        // eslint-disable-next-line
    },[])

    
    const handleChange = e => {
        if(text.current.value !== ''){
            filterTickets(e.target.value)
        }else{
            clearFilter()
        }
    }

    if(loading === true || tickets === null){
        return <Spinner/>
    }else{
        return (
            <>
                <div className="tickets container col-xxl-7 mt-5 mb-5">
                    <div className="d-flex align-items-center">
                        <div className="carLogo">
                            <img src="./img/carLogo.png" alt="Car Logo" />
                        </div>
                        <h2 className="mb-0 ms-4">Car Workshop</h2>
                        <div className="ms-auto d-flex flex-row">
                            <button 
                                className="addTIcket-btn btn-primary ms-3"
                                data-bs-toggle="modal" data-bs-target="#addTicketModal"
                            >
                                <span className="material-icons">note_add</span>
                            </button>
                            <button 
                                className="addMechanic-btn btn-success ms-3"
                                data-bs-toggle="modal" data-bs-target="#addMechanicModal"
                            >
                                <span className="material-icons">person_add</span>
                            </button>
                        </div>
                    </div>
                    <div className="card mt-3" style={{width: '18 rem'}}>
                        <div className="search-input card-body d-flex align-items-center">
                            <h5 className="card-title">Tickets List</h5>
                            <div className="input-group mb-0 ms-auto" style={{width: '300px'}}>
                                <input 
                                    type="search" 
                                    className="form-control" 
                                    placeholder="Search for a ticket..." 
                                    aria-label="Recipient's username" 
                                    aria-describedby="basic-addon2"
                                    ref={text}
                                    onChange={handleChange}
                                />
                                <span className="input-group-text bg-primary" id="basic-addon2">
                                    <span className="material-icons text-light">search</span>
                                </span>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush">
                            {filtered !== null ? filtered.map(ticket=> (<TicketsItem key={ticket._id} ticket={ticket}/>)) 
                                :
                            tickets.map(ticket=> (<TicketsItem key={ticket._id} ticket={ticket}/>)) }
                        </ul>
                    </div>
                </div>
                <AddTicketModal/>
                <AddMechanicModal/>
                <EditTicketModal/>
            </>
        )
    }
}

export default Tickets
