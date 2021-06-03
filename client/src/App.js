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
  const [updatingId, setUpdatingId] = useState('');
  const [deleteClick, setDeleteClick] = useState(false);
  const [postClick, setPostClick] = useState(false);
  const [updateClick, setUpdateClick] = useState(false);
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
  }, [deleteClick, postClick, updateClick])



  return (
    <WorkersContext.Provider value={{
      updateClick,
      setUpdateClick,
      postClick,
      setPostClick,
      deleteClick,
      setDeleteClick,
      workers,
      setWorkers,
      input,
      setInput,
      isUpdating,
      setIsUpdating,
      updatingId,
      setUpdatingId
    }}>
      <WorkersTable />
      <WorkerForm />
    </WorkersContext.Provider>
  )
}

export default App

