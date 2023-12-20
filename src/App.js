import React from 'react'
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM naming Convention

    <div className='app' >
      

        <div className="app__body" >
              <Sidebar/>
               <Chat/>
               
        </div>
    </div>
  )
}

export default App