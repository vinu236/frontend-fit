
import { useState, useEffect, useRef } from "react";

import instance from "../../api/axios";
import NoChat from "./NoChat";
import ActiveChat from "./ActiveChat"
import {  toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
const Chat = () => {

  const [conversation, setConversation] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [messages, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const[arrivalMessage,setArrivalMessage]=useState(null)
  const scrollRef = useRef();
  const socket=useRef()
  const uid = useSelector((store) => store.user.uid);
  console.log("user id is ", uid);
  console.log(uid);
  const planActive=useSelector((store)=>store.plan.plan);

  


  return planActive.plan==!true ? (
    <NoChat />
  ) :<ActiveChat/>
};

export default Chat;