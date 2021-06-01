// libs
import React, { useState, useEffect } from 'react'
import WorkerForm from './components/WorkerForm';

// components
import WorkersTable from './components/WorkersTable';

const App = () => {
  const [workers, setWorkers] = useState([]);
  console.log(workers)

  useEffect(() => {
    fetch(`http://localhost:5000/workers`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        setWorkers(data)
      })
      .catch(err => {
        console.error(err);
      });
  }, [])

  return (
    <div>
      <WorkersTable workers={workers} />
      <WorkerForm />
    </div>
  )
}

export default App

