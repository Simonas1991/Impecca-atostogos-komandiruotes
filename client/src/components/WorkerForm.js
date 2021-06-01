// libs
import React from 'react'

// css
import './WorkerForm.css'

const WorkerForm = () => {
    return (
        <form>
            <div className='form-control'>
                <label>Vardas</label>
                <input
                    type='text'
                />
            </div>
            <div className='form-control'>
                <label>Pavardė</label>
                <input
                    type='text'
                />
            </div>
            <div className='form-control'>
                <label>Asmens kodas</label>
                <input
                    type='text'
                />
            </div>
            <div className='form-control'>
                <label>Adresas</label>
                <input
                    type='text'
                />
            </div>
            <div className='form-control'>
                <label>Tel. nr.</label>
                <input
                    type='text'
                />
            </div>
            <div className='form-control'>
                <label>El.paštas</label>
                <input
                    type='email'
                />
            </div>
            <div className='form-control'>
                <button>Pateikti</button>
            </div>
        </form>
    )
}

export default WorkerForm
