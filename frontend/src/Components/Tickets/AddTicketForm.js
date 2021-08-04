import React, {useContext, useEffect, useState} from 'react';
import MechanicsContext from '../../context/mechanics/mechanicsContext';
import TicketsContext from '../../context/tickets/ticketsContext';

const AddTicketForm = (props) => {
    const mechanicsContext = useContext(MechanicsContext);
    const ticketsContext = useContext(TicketsContext);

    const {mechanics, getMechanics} = mechanicsContext;
    const {addTicket} = ticketsContext;

    useEffect(()=>{
        getMechanics()
        // eslint-disable-next-line
    },[])

    const [message, setMessage] = useState('');
    const [resolved, setResolved] = useState(false);
    const [mechanic, setMechanic] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const ticket = {
            message: message,
            resolved: resolved,
            mechanic: mechanic
        }
        addTicket(ticket);
        setMessage('');
        setResolved(false);
        setMechanic('');
        window.location.reload();
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="modal-body">
                <div className="form-floating mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="floatingInput" 
                        name="message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        required
                    />
                    <label htmlFor="floatingInput">Ticket Description</label>
                </div>
                <select 
                    className="form-select form-select-lg fs-6 mb-3" 
                    aria-label="Default select example"
                    name="mechanic"
                    value={mechanic}
                    onChange={e => setMechanic(e.target.value)}
                    required
                >
                    <option value="" disabled>Select Mechanic</option>
                    {mechanics !== null && mechanics.map(m => (
                        <option 
                            key={m._id}
                            value={`${m.firstName} ${m.lastName}`}
                        >
                            {`${m.firstName} ${m.lastName}`}
                        </option>
                    ))}
                </select>
                <div className="form-check form-switch">
                    <input 
                        className="form-check-input" 
                        type="checkbox" id="flexSwitchCheckDefault"
                        checked={resolved}
                        value={resolved}
                        onChange={e => setResolved(!resolved)}
                    />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Resolved</label>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default AddTicketForm
