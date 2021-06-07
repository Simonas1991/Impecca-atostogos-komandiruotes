// libs
import React, { useContext } from 'react';
import { WorkersContext } from '../App';

// css
import './HolidayWorkTable.css';

const HolidayWorkTable = () => {
    // hooks
    // - useContext
    const workersContext = useContext(WorkersContext);
    let { workers, setUpdatingId, setInput } = workersContext;

    // variables
    let holidayArray = workers.filter(worker => worker.type === 'holiday');
    let workArray = workers.filter(worker => worker.type === 'work');
    let noStatusArray = workers.filter(worker => worker.type === '');

    // functions
const handleUpdate = (e, worker) => {
    let {to , from} = worker
    console.log(to , from)
    setUpdatingId(worker._id)
    setInput({
        to: to,
        from: from
    })
    
}

    const mapArr = (arr) => {
        return (
            arr.map((worker, i) => (
                <tbody key={i} className='workers-table__body'>
                    <tr>
                        <td>{worker.name}</td>
                        <td>{worker.surname}</td>
                        <td>{worker.personalCode}</td>
                        <td>{worker.from}</td>
                        <td>{worker.to}</td>
                        <td><button onClick={(e) => handleUpdate(e, worker)}>Keisti</button></td>
                    </tr>
                </tbody>
            ))
        )
    };

    return (
        <div className='tables-container'>
            <div>
                <h3>Atostogos</h3>
                <table className='table'>
                    <thead className='table__header'>
                        <tr>
                            <th>Vardas</th>
                            <th>Pavardė</th>
                            <th>Asmens kodas</th>
                            <th>Nuo</th>
                            <th>Iki</th>
                            <th></th>
                        </tr>
                    </thead>
                    {mapArr(holidayArray)}
                </table>
            </div>
            <div>
                <h3>Komandiruotes</h3>
                <table className='table'>
                    <thead className='table__header'>
                        <tr>
                            <th>Vardas</th>
                            <th>Pavardė</th>
                            <th>Asmens kodas</th>
                            <th>Nuo</th>
                            <th>Iki</th>
                            <th></th>
                        </tr>
                    </thead>
                    {mapArr(workArray)}
                </table>
            </div>
            <div>
                <h3>Be statuso</h3>
                <table className='table'>
                    <thead className='table__header'>
                        <tr>
                            <th>Vardas</th>
                            <th>Pavardė</th>
                            <th>Asmens kodas</th>
                        </tr>
                    </thead>
                    {noStatusArray.map((worker, i) => (
                        <tbody key={i} className='workers-table__body'>
                            <tr>
                                <td>{worker.name}</td>
                                <td>{worker.surname}</td>
                                <td>{worker.personalCode}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>

        </div>
    )
}

export default HolidayWorkTable;