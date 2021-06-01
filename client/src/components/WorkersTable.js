// libs
import React from 'react';

// css
import './WorkersTable.css'

const WorkersTable = ({ workers }) => {

  
    return (
        <table className='workers-table'>
            <thead className='workers-table__header'>
                <tr>
                    <th>Vardas</th>
                    <th>Pavardė</th>
                    <th>Asmens kodas</th>
                    <th>Adresas</th>
                    <th>Tel. nr.</th>
                    <th>El.paštas</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            {workers.map((worker, i) => (
                <tbody key={i} className='workers-table__body'>
                    <tr>
                        <td>{worker.name}</td>
                        <td>{worker.surname}</td>
                        <td>{worker.personalCode}</td>
                        <td>{worker.address}</td>
                        <td>{worker.number}</td>
                        <td>{worker.email}</td>
                        <td><button>Keisti</button></td>
                        <td><button>Trinti</button></td>
                    </tr>
                </tbody>
            ))}
        </table>
    )
}

export default WorkersTable
