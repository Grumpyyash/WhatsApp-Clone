import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css"

function SidebarChat() {
    return (
        <div className="sidebarChat">
          <Avatar />
          <div className="sidebarChat__info">
              <h2>Room name</h2>
              <p>This is the last message in the room</p>
          </div>
        </div>
    )
}

export default SidebarChat