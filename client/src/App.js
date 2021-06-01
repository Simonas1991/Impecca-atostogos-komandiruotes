import React, { useState, useEffect } from 'react'
import WorkersTable from './components/WorkersTable';

const App = () => {
  const [workers, setWorkers] = useState([]);


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

  console.log(workers)

  return (
    <div>
      <WorkersTable workers={workers} />
    </div>
  )
}

export default App

