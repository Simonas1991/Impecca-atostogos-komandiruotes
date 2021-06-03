// libs
import React, { useContext } from 'react';
import axios from 'axios';
import { WorkersContext } from '../App';

// css
import './WorkerForm.css';


const WorkerForm = () => {
    // hooks
    // - useContext
    const workersContext = useContext(WorkersContext);
    let {
        updateClick,
        setUpdateClick,
        postClick,
        setPostClick,
        input,
        setInput,
        isUpdating,
        setIsUpdating,
        updatingId } = workersContext;

    // functions
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    const handleClick = (e) => {
        if (isUpdating) {
            e.preventDefault();
            const updatedNote = {
                name: input.name,
                surname: input.surname,
                personalCode: input.personalCode,
                address: input.address,
                number: input.number,
                email: input.email,
            }
            axios.patch(`http://localhost:5000/workers/${updatingId}`, updatedNote)
            setIsUpdating(false)
            setUpdateClick(!updateClick)
            setInput({
                name: '',
                surname: '',
                personalCode: '',
                address: '',
                number: '',
                email: ''
            })
        } else {
            e.preventDefault();
            const newNote = {
                name: input.name,
                surname: input.surname,
                personalCode: input.personalCode,
                address: input.address,
                number: input.number,
                email: input.email,
            }
            axios.post('http://localhost:5000/workers/', newNote)
            setPostClick(!postClick)
            setInput({
                name: '',
                surname: '',
                personalCode: '',
                address: '',
                number: '',
                email: ''
            })
        }
    }

    return (
        <form onSubmit={handleClick} className='form-container'>
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
                <button >{isUpdating ? 'Keisti' : 'Prideti'}</button>
            </div>
        </form>
    )
}

export default WorkerForm
