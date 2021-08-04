import React, {useContext, useState} from 'react';
import MechanicsContext from '../../context/mechanics/mechanicsContext';

const AddMechanicForm = () => {
    const mechanicsContext = useContext(MechanicsContext);
    
    const { addMechanic } = mechanicsContext;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const mechanic = {
            firstName: firstName,
            lastName: lastName
        }
        addMechanic(mechanic);
        setFirstName('');
        setLastName('');
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
                        name="firstName"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        required
                    />
                    <label htmlFor="floatingInput">FirstName</label>
                </div>
                <div className="form-floating mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="floatingInput" 
                        name="lastName"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        required
                    />
                    <label htmlFor="floatingInput">LastName</label>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
    )
}

export default AddMechanicForm
