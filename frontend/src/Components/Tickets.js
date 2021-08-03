import React from 'react'

const Tickets = () => {
    return (
        <div className="tickets container col-7 mt-5">
            <div className="d-flex align-items-center">
                <div className="carLogo">
                    <img src="./img/carLogo.png" alt="Car Logo" />
                </div>
                <h2 className="mb-0 ms-4">Car Workshop</h2>
            </div>
            <div className="card mt-3" style={{width: '18 rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Tickets List</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                    <a href="#!" className="card-link">Card link</a>
                    <a href="#!" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    )
}

export default Tickets
