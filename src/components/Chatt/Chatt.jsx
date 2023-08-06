import "./Chatt.css"
import ChatAside from "./ChatAside";
import ChatList from "./ChatList";
import ChatListName from "./ChatListName";
import { useState,useEffect,useRef } from "react";
import { useSelector } from "react-redux";
import ChatAvatar from "./ChatAvatar";
import ChatMain from "./ChatMain";
import instance from "../../api/axios";
import NoChat from "../Chat/NoChat";
import { io } from "socket.io-client";
import User from "../../pages/Users";


const Chatt=()=>{
    const[active,setActive]=useState(true)
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
  

      useEffect(()=>{
    socket.current=io("http://localhost:3000/");
    socket.current.on("getMessage",(data)=>{
      setArrivalMessage({
        sender:data.senderId,
        text:data.text,
        createdAt:Date.now()
      })
    })
  },[])
useEffect(()=>{
    arrivalMessage && currentUser.members.includes(arrivalMessage.sender) &&
    setMessage((prev)=>[...prev,arrivalMessage])
  },[arrivalMessage,currentUser])

 useEffect(()=>{
  socket.current.emit("addUser",uid);
  socket.current.compress("getUsers",users=>{
  })
 },[uid])



  useEffect(() => {
    getConversation();
  }, [uid]);

const getConversation = async () => {
    try {
      const { data, status } = await instance(`/conversation/${uid}`);
      console.log(data)
      if (status === 200) {
        setConversation(data?.conversation);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMessage();
  }, [currentUser]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getMessage = async () => {
    try {

      const { data, status } = await instance.get(
        `/message/${currentUser._id}`
      );
      console.log(data)
      setMessage(data?.messages);


    } catch (error) {
      console.log(error);
    }
  };
  const handleChange=(e)=>{
    console.log(e.target.value)
    setNewMessage(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: uid,
      text: newMessage,
      conversationId: currentUser._id,
    };

    const receiverId=currentUser.members.find(member=>member!==uid)
    socket.current.emit("sendMessage",{
      senderId:uid,
      receiverId,
      text:newMessage
    })

    try {
      const { data, status } = await instance.post("/message", message);
      setMessage([...messages, data?.savedMessage]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };
console.log(messages)

    return (
        <section className="chat-section">
           <ChatAside>
           <ChatList className={`text-white p-4 ${active?"bg-[#d5e7f5]":"" }`} >
            
          {conversation?.map((c)=>{
            return(
                <ChatListName conversation={c} currentUser={uid} className={`${active?"text-blue-400":"text-black"} flex items-center`} onClick={() => setCurrentUser(c)} />
            )
          })


          }
         
           </ChatList>
           </ChatAside>
            <ChatMain messages={messages} currentUser={uid} onChange={handleChange} value={newMessage} onClick={handleSubmit}/>
        </section>
      )
    
}


export default Chatt;