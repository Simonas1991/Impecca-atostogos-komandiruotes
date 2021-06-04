// libs
import React, { useContext } from 'react';
import axios from 'axios';
import { WorkersContext } from '../App';

// css
import './WorkersTable.css'

const WorkersTable = () => {
    // hooks
    // - useContext
    const workersContext = useContext(WorkersContext);
    let {
        workers,
        deleteClick,
        setDeleteClick,
        setInput,
        isUpdating,
        setIsUpdating,
        setUpdatingId } = workersContext;

    // functions
    const handleDelete = async (e, worker) => {
        e.preventDefault();
        try{
            await axios.delete(`http://localhost:5000/workers/${worker._id}`)
            setDeleteClick(!deleteClick)
        }
        catch(err){
            console.log(err)
        }
    }

    const handleUpdate = (e, worker) => {
        e.preventDefault();
        setIsUpdating(!isUpdating)
        setUpdatingId(worker._id)
        setInput(worker)
    }

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
                        <td><button onClick={(e) => handleUpdate(e, worker)}>Keisti</button></td>
                        <td><button onClick={(e) => handleDelete(e, worker)}>Trinti</button></td>
                    </tr>
                </tbody>
            ))}
        </table>
    )
}

export default WorkersTable
