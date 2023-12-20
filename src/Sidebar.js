import React, {  } from "react";

import "./Sidebar.css";

import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SidebarChat from "./SidebarChat";
import { Avatar } from "@mui/material";



function Sidebar() {
  

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar/>

        <div className="sidebar__headerRight">
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div
         className="sidebar__searchContainer" > 
        <SearchIcon />
        <input placeholder="search or start new chat"  type="text" />
         </div>      
      </div>

      <div className="sidebar__chats">
        <SidebarChat addNewChat  />
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
       
      </div>
    </div>
  );
}

export default Sidebar;
