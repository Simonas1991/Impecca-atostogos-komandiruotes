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
                            <th></th>
                        </tr>
                    </thead>
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
                            <th></th>
                        </tr>
                    </thead>
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
                            <th>Nuo</th>
                            <th>Iki</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>

        </div>
    )
}

export default HolidayWorkTable;
