import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import "./SidebarChat.css";

function SidebarChat({addNewChat}) {
  const [seed, setSeed]= useState("");

  useEffect(()=>{
    setSeed(Math.floor(Math.random() *5000 ));
  },[])

  const createchat =()=>{
    const rooName = prompt("plase enter name for chat");
   if(rooName){
    // do some claver database stuff
    

   }
  };

  return !addNewChat ? (
    <div  className='sidebarChat'>
    <Avatar src={`https://avatars.dicebear.com/api/human/ ${seed} .svg`}   />
    <div className='sidebarChat__info' >
        <h2> Room name </h2>
        <p> Last massage... </p>
    </div>
    </div>
  ):(
    <div onClick={createchat}
    className="sidebarChat" >
       <h2> Add new Chat </h2>

    </div>
  );
}

export default SidebarChat