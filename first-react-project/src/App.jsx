import React from 'react';
import Card from './components/card.jsx';
import './App.css';
import Navbar from './components/navbar.jsx'


const App = () => {
  return (
    <>
    <div className="navigation">
      <Navbar />
    </div>
    <div className='parent'>
      <Card name = "Taimoor" age = {22} img="https://images.unsplash.com/photo-1774327988852-531c6eba5397?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card name = "Arshad" age = {70} img="https://images.unsplash.com/photo-1777221490079-b949ecac1a9e?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card name = "Mughal" age = {23} img="https://images.unsplash.com/photo-1770041797744-59e295885e8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D"/>
    </div>
    </>
  )
}

export default App
