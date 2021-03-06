// libs
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// pages
import Workers from './pages/Workers';
import HolidayWorkSchedule from './pages/HolidayWorkSchedule';

// css
import './App.css';

// context
export const WorkersContext = React.createContext();


const App = () => {
  // functions
  const getWorkers = async () => {
    const response = await fetch(`http://localhost:5000/workers`)
    const data = await response.json();
    console.log(data)
    setWorkers(data)
  };

  // hooks
  // - useState
  const [workers, setWorkers] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatingId, setUpdatingId] = useState('');
  const [deleteClick, setDeleteClick] = useState(false);
  const [postClick, setPostClick] = useState(false);
  const [updateClick, setUpdateClick] = useState(false);
  const [statusCustom, setStatusCustom] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [input, setInput] = useState({
    name: '',
    surname: '',
    personalCode: '',
    address: '',
    number: '',
    email: '',
    type: 'nostatus',
    from: '',
    to: ''
  });

  // - useEffect
  useEffect(() => {
    getWorkers();
  }, [deleteClick, postClick, updateClick, isUpdating])

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
      setUpdatingId,
      statusCustom,
      setStatusCustom,
      isActive,
      setIsActive,
    }}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/workers'>
            <Workers />
          </Route>
          <Route exact path='/holiday-work-schedule'>
            <HolidayWorkSchedule />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </WorkersContext.Provider>
  )
};

export default App;

