import React from 'react';
import AddMechanicForm from './AddMechanicForm';

const AddMechanicModal = () => {
    
    return (
        <div className="modal fade" id="addMechanicModal" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Add Mechanic</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <AddMechanicForm/>
                </div>
            </div>
        </div>
    ) 
}

export default AddMechanicModal
