import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { selectUser } from './features/userSlice';

function App() {
  //..useSelector coming from reduxjs 
  const user = useSelector(selectUser)
  return (
    <div className="app">
    <Header/>
    {/* If user is not logged in render login page */}
    {!user ? (
      <Login/>
    ) : (
      <div className='app_body'>
      <Sidebar/>
      <Feed/>
      {/* Widgets */}
      </div>
    )}
    </div>
  );
}

export default App;
