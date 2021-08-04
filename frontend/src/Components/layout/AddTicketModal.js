import React from 'react'

const AddTicketModal = () => {
    return (
        <div className="modal fade" id="addTicketModal" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Add Ticket</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Add a description"/>
                            <label for="floatingInput">Ticket Description</label>
                        </div>
                        <select className="form-select form-select-lg fs-6 mb-3" aria-label="Default select example">
                            <option selected>Select Mechanic</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div className="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default AddTicketModal
