// libs
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// pages
import Workers from './pages/Workers';
import Holiday from './pages/Holiday';
import WorkSchedule from './pages/WorkSchedule';

// css
import './App.css';

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
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/workers'>
            <Workers />
          </Route>
          <Route exact path='/holidays'>
            <Holiday />
          </Route>
          <Route exact path='/work-schedule'>
            <WorkSchedule />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </WorkersContext.Provider>
  )
}

export default App

