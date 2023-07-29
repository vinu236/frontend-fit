import React from 'react'
import ChatAvatar from './ChatAvatar'
import { format } from "timeago.js";
import "./message.css";
const ChatMessage = ({sender,text,date}) => {
  return (
    <div className={sender ? "message own" : "message"}>
    <div className="messageTop">
      <img
        className="messageImg"
        src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <p className="messageText">{text}</p>
    </div>
    <div className="messageBottom">{format(date)}</div>
  </div>
);
  
}

export default ChatMessage