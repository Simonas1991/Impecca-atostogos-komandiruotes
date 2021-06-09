// libs
import React, { useContext, useState } from 'react';
import { WorkersContext } from '../App';

// css
import './HolidayWorkTable.css';

const HolidayWorkTable = () => {
    // hooks
    // - useState
    const [activeId, setActiveId] = useState('')

    // - useContext
    const workersContext = useContext(WorkersContext);
    let {
        workers,
        setUpdatingId,
        setInput,
        isActive,
        setIsActive,
        isUpdating,
        setIsUpdating } = workersContext;

    // variables
    let holidayArray = workers.filter(worker => worker.type === 'holiday');
    let workArray = workers.filter(worker => worker.type === 'work');
    let noStatusArray = workers.filter(worker => worker.type === 'nostatus');


    // functions
    const handleUpdate = (e, worker) => {
        e.preventDefault();
        setIsActive(!isActive)
        setActiveId(worker._id)
        setIsUpdating(!isUpdating)
        setUpdatingId(worker._id)
        if (!isActive) setInput(worker)
        else setInput({
            name: '',
            surname: '',
            to: '',
            from: ''
        })
    }

    const dateChecker = (string) => {
        const dateTo = new Date(string);
        const dateNow = new Date()
        if (dateTo > dateNow) return true
        else if (dateTo < dateNow) return false
        else if (dateTo === dateNow) return false
    }

    const mapArr = (arr) => {
        return (
            arr.map((worker, i) => (
                <tbody key={i} className='workers-table__body'>
                    <tr className={activeId === worker._id && isActive ? 'active' : ''}>
                        <td>{worker.name}</td>
                        <td>{worker.surname}</td>
                        <td>{worker.personalCode}</td>
                        <td>{worker.from}</td>
                        <td className={dateChecker(worker.to) ? 'green' : 'warning'}>{worker.to}</td>
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