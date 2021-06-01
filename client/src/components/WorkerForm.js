// libs
import React, { useState } from 'react'

// css
import './WorkerForm.css'

const WorkerForm = () => {
    const [input, setInput] = useState({
        name: '',
        surname: '',
        personalCode: '',
        address: '',
        number: '',
        email: '',
    })

    const handleChange = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target;
        setInput((prevInput) => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(input)
    }


    return (
        <form>
            <div className='form-control'>
                <label>Vardas</label>
                <input
                    type='text'
                    name='name'
                    value={input.name}
                    onChange={handleChange}
                />
            </div>
            <div className='form-control'>
                <label>Pavardė</label>
                <input
                    type='text'
                    name='surname'
                    value={input.surname}
                    onChange={handleChange}
                />
            </div>
            <div className='form-control'>
                <label>Asmens kodas</label>
                <input
                    type='text'
                    name='personalCode'
                    value={input.personalCode}
                    onChange={handleChange}
                />
            </div>
            <div className='form-control'>
                <label>Adresas</label>
                <input
                    type='text'
                    name='address'
                    value={input.address}
                    onChange={handleChange}
                />
            </div>
            <div className='form-control'>
                <label>Tel. nr.</label>
                <input
                    type='text'
                    name='number'
                    value={input.number}
                    onChange={handleChange}
                />
            </div>
            <div className='form-control'>
                <label>El.paštas</label>
                <input
                    type='email'
                    name='email'
                    value={input.email}
                    onChange={handleChange}
                />
            </div>
            <div className='form-control'>
                <button onClick={handleClick}>Pateikti</button>
            </div>
        </form>
    )
}

export default WorkerForm
