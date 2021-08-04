import React, {useContext, useEffect} from 'react';
import EditTicketForm from './EditTicketForm';
import TicketsContext from '../../context/tickets/ticketsContext';

const EditTicketModal = () => {
    const ticketsContext = useContext(TicketsContext);

    const {setEditModalOff, showEditModal, clearSingle} = ticketsContext;

    useEffect(()=>{
        if(showEditModal){
            document.body.style.overflowY = 'hidden'
        }else{
            document.body.style.overflowY = 'visible'
        }
    },[showEditModal]);

    const handleClick = () => {
        setEditModalOff();
        clearSingle();
    }

    return (
        <div className="editModal" style={showEditModal ? {display: 'block'} : {display: 'none'}}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Edit Ticket</h5>
                        <button type="button" className="btn-close" onClick={handleClick}></button>
                    </div>
                    <EditTicketForm/>
                </div>
            </div>
        </div>
    ) 
}

export default EditTicketModal
