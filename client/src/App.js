// libs
import React, { useState, useEffect } from 'react'
import WorkerForm from './components/WorkerForm';

// components
import WorkersTable from './components/WorkersTable';

// context
export const WorkersContext = React.createContext();


const App = () => {
  // hooks
  // - useState
  const [workers, setWorkers] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatingId, setUpdatingId] = useState('')
  const [input, setInput] = useState({
    name: '',
    surname: '',
    personalCode: '',
    address: '',
    number: '',
    email: ''
  });

  // - useEffect
  useEffect(() => {
    fetch(`http://localhost:5000/workers`)
      .then(response => response.json())
      .then(data => {
        setWorkers(data)
      })
      .catch(err => {
        console.error(err);
      });
  }, [])


  return (
    <WorkersContext.Provider value={{ input, setInput, isUpdating, setIsUpdating, updatingId, setUpdatingId }}>
      <WorkersTable workers={workers} />
      <WorkerForm />
    </WorkersContext.Provider>
  )
}

export default App

