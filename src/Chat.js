import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

import "./Chat.css";

function Chat() {
    const [input , setInput] =useState("");
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMassage = (e) =>{
    e.preventDefault();
    console.log("tye mag>>>",input);
    c
    setInput("");
  }
  return (
    <div className="Chat">
      <div className="chat__header">
        <IconButton>
          <Avatar
            src={`https://avatars.dicebear.com/api/human/ ${seed} .svg`}
          />
        </IconButton>
        <div className="Chat__hearderInfo">
          <h3> Room Name</h3>
          <p> Last see at... </p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__massage chat__raciever">  
         
          <span className="chat__name">Ayyaz yousaf</span>
          Hey Guys
          <span className="chat__timetamp">3:54</span>
        </p>
      </div>
      <div className="chat__footer">
       <InsertEmoticonIcon/>
          <form>
                <input value={input}  onChange={(e) =>setInput(e.target.value)  }  placeholder="Type a massage" type="text"/>
                <button onClick={sendMassage}    type="submit" > send a message </button>
          </form>
       <MicIcon/>
       
      </div>
    </div>
  );
}

export default Chat;
