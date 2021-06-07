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
        updatingId,
        statusCustom,
        setStatusCustom
    } = workersContext;

    // variables
    const emptyInputsObj = {
        name: '',
        surname: '',
        personalCode: '',
        address: '',
        number: '',
        email: '',
        type: '',
        to: '',
        from: ''
    }

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

    const handleSelect = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => {
            return {
                ...prevInput,
                [name]: value
            }
        })
        if (value === 'holiday' || value === 'work') setStatusCustom(true)
        else setStatusCustom(false)
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setInput(emptyInputsObj)
        setStatusCustom(false);
        setIsUpdating(false)
    }

    const handleSubmit = async (e) => {
        if (isUpdating) {
            e.preventDefault();
            const updatedNote = {
                name: input.name,
                surname: input.surname,
                personalCode: input.personalCode,
                address: input.address,
                number: input.number,
                email: input.email,
                type: input.type,
                from: input.from,
                to: input.to
            }
            try {
                await axios.patch(`http://localhost:5000/workers/${updatingId}`, updatedNote)
                setIsUpdating(false)
                setUpdateClick(!updateClick)
                setInput(emptyInputsObj)
            }
            catch (err) {
                console.log(err)
            }
        } else {
            e.preventDefault();
            const newNote = {
                name: input.name,
                surname: input.surname,
                personalCode: input.personalCode,
                address: input.address,
                number: input.number,
                email: input.email,
                type: '',
                from: input.from,
                to: input.to
            }
            try {
                await axios.post('http://localhost:5000/workers/', newNote)
                setPostClick(!postClick)
                setInput(emptyInputsObj)
            }
            catch (err) {
                console.log(err)
            }
        }
        setStatusCustom(false);
    };

    return (
        <form onSubmit={handleSubmit} className='form-container'>
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
                <label>Statusas:</label>
                {!statusCustom ?
                    <select name="type" value={input.type} onChange={handleSelect}>
                        <option value="">Be statuso</option>
                        <option value="holiday">Neapmokamose atostogose</option>
                        <option value="work">Komandiruoteje</option>
                    </select>
                    :
                    <>
                        <select name="type" value={input.type} onChange={handleSelect}>
                            <option value="">Be statuso</option>
                            <option value="holiday">Neapmokamose atostogose</option>
                            <option value="work">Komandiruoteje</option>
                        </select>
                        <label>Nuo</label>
                        <input name="from" value={input.from} onChange={handleChange} />
                        <label>Iki</label>
                        <input name="to" value={input.to} onChange={handleChange} />
                    </>
                }
            </div>
            <div className='form-control' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button style={{ position: 'relative', right: '-192px', marginTop: '10px' }}>{isUpdating ? 'Keisti' : 'Prideti'}</button>
                <button style={{ position: 'relative', top: '-31px' }} onClick={handleCancel}>Atsaukti</button>
            </div>
        </form>
    )
};

export default WorkerForm;