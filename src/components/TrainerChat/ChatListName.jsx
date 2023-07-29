import React from 'react'
import ChatAvatar from './ChatAvatar'
import { useState, useEffect } from "react";
import instance from "../../api/axios";

const ChatListName = ({name,className,conversation,currentUser,onClick}) => {

  const[trainees,setTrainee]=useState({});

  useEffect(() => {
    const friendId = conversation.members.find((m,index) => {
      return m!== currentUser;
    });
    console.log("friendId is ", friendId);
    getTrainer(friendId);   
  }, []);

  const getTrainer=async(id)=>{
    try {
        const {data,status}=await instance.get(`/user/${id}`);
        console.log("asdasdasdasdasdasdasdasdasdasdasdasdasdasd")
        console.log(data);
        setTrainee(data?.getUser);
        console.log(status);
    } catch (error) {
      console.log(error)
    }
  }


console.log(trainees);
  return (
    <li className={className} onClick={onClick}>
      <ChatAvatar className="messageImg" src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      {"Vinayak"}
      </li>
  )
}

export default ChatListName