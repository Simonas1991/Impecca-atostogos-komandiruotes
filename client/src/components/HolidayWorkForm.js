// libs
import React, { useContext } from 'react';
import axios from 'axios';
import { WorkersContext } from '../App';

const HolidayWorkForm = () => {
    // hooks
    // - useContext
    const workersContext = useContext(WorkersContext);
    let {
        updateClick,
        setUpdateClick,
        input,
        setInput,
        setIsUpdating,
        updatingId
    } = workersContext;

    // functions
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedDates = {
            from: input.from,
            to: input.to
        }

        try {
            await axios.patch(`http://localhost:5000/workers/${updatingId}`, updatedDates)
            setIsUpdating(false)
            setUpdateClick(!updateClick)
            setInput({
                from: '',
                to: ''
            })
        }
        catch (err) {
            console.log(err)
        }
    }



    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label>Nuo</label>
                <input
                    type='text'
                    name='from'
                    value={input.from}
                    onChange={handleChange}
                />
            </div>
            <div className='form-control'>
                <label>Iki</label>
                <input
                    type='text'
                    name='to'
                    value={input.to}
                    onChange={handleChange}
                />
            </div>
            <button style={{ display: 'flex', margin: '30px auto', padding: '4px' }}>Keisti data</button>
        </form>
    )
}

export default HolidayWorkForm;
