// libs
import React from 'react';


const HolidayWorkForm = () => {
    return (
        <form className='form-container'>
            <div className='form-control'>
                <label>Vardas</label>
                <input
                    type='text'
                    name='name'
                />
            </div>
            <div className='form-control'>
                <label>Pavardė</label>
                <input
                    type='text'
                    name='surname'
                />
            </div>
            <div className='form-control'>
                <label>Asmens kodas</label>
                <input
                    type='text'
                    name='personalCode'
                />
            </div>
            <div className='form-control'>
                <label>Nuo</label>
                <input
                    type='text'
                    name='from'
                />
            </div>
            <div className='form-control'>
                <label>Iki</label>
                <input
                    type='text'
                    to='to'
                />
            </div>
            <div className='form-control' style={{display:'flex', justifyContent:'flex-end'}}>
                <button style={{ position: 'relative', right:'-192px'}}>Itraukti i sarasa</button>
            </div>
        </form>
    )
}

export default HolidayWorkForm
