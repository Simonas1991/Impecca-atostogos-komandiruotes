// libs
import React, { useContext } from 'react'
import { WorkersContext } from '../App';

// css
import './HolidayWorkTable.css'

const HolidayWorkTable = () => {
    // hooks
    // - useContext
    const workersContext = useContext(WorkersContext);
    let { workers } = workersContext;

    return (
        <table className='holiday-work-table'>
            <thead className='holiday-work-table__header'>
                <tr>
                    <th>Vardas</th>
                    <th>Pavardė</th>
                    <th>Asmens kodas</th>
                    <th>Nuo</th>
                    <th>Iki</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
        </table>
    )
}

export default HolidayWorkTable;
