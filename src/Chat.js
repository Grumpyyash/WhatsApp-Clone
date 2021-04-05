import React, { useState, useEffect } from "react";
import "./Chat.css";
import {Avatar, IconButton} from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
     setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
     e.preventDefault();
     console.log(input);
     setInput("");
  };



    return (
        <div className="chat">
          <div className="chat__header">
            <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="chat__headerInfo">
              <h3>Room name</h3>
              <p>Last seen at...</p>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                  <SearchOutlined />
                </IconButton>
                <IconButton>
                  <AttachFile />
                </IconButton> 
                <IconButton>
                  <MoreVert />
                </IconButton>  
            </div>
          </div>

          <div className="chat__body">
            <p className="chat__message">
              <span className="chat__name">Yash</span>
              This is a message
              <span className="chat__timestamp">
                {new Date().toUTCString()}
              </span>
            </p>
            <p className="chat__message">
              <span className="chat__name">Yash</span>
              This is a message
              <span className="chat__timestamp">
                {new Date().toUTCString()}
              </span>
            </p>
            <p className="chat__message">
              <span className="chat__name">Yash</span>
              This is a message
              <span className="chat__timestamp">
                {new Date().toUTCString()}
              </span>
            </p>
            <p className={`chat__message ${true && 'chat__receiver'}`}>
              <span className="chat__name">Yash</span>
              This is a message
              <span className="chat__timestamp">
                {new Date().toUTCString()}
              </span>
            </p>
            <p className="chat__message">
              <span className="chat__name">Yash</span>
              This is a message
              <span className="chat__timestamp">
                {new Date().toUTCString()}
              </span>
            </p>
          </div>

          <div className="chat__footer">
            <InsertEmoticonIcon className="search-icon" />
            <form>
              <input onChange={ e => setInput(e.target.value)} placeholder="Type a message" type="text" value={input} />
              <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            <MicIcon className="search-icon" />
          </div>
        </div>
    )
}

export default Chat