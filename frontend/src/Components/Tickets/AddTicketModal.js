import React from 'react';
import AddTicketForm from './AddTicketForm';

const AddTicketModal = () => {
    
    return (
        <div className="modal fade" id="addTicketModal" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Add Ticket</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <AddTicketForm/>
                </div>
            </div>
        </div>
    ) 
}

export default AddTicketModal
