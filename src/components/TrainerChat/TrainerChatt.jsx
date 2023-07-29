import "./TrainerChatt.css"
import ChatAside from "./ChatAside";
import ChatList from "./ChatList";
import ChatListName from "./ChatListName";
import { useState,useEffect,useRef } from "react";
import { useSelector } from "react-redux";
import ChatAvatar from "./ChatAvatar";
import ChatMain from "./ChatMain";
import instance from "../../api/axios";
import { io } from "socket.io-client";


const TrainerChatt=()=>{
    const[active,setActive]=useState(true)
    const [conversation, setConversation] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [messages, setMessage] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const[arrivalMessage,setArrivalMessage]=useState(null)
    const scrollRef = useRef();
    const socket=useRef()
    const tid = useSelector((store) => store.trainer.tid);
   
  

      useEffect(()=>{
    socket.current=io("https://getfitgo.online");
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
    socket.current.emit("addUser",tid);
    socket.current.compress("getUsers",users=>{
      console.log(users);
    })
   },[tid])



  useEffect(() => {
    getConversation();
  }, [tid]);

const getConversation = async () => {
    try {
      const { data, status } = await instance(`/conversation/${tid}`);
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
      sender: tid,
      text: newMessage,
      conversationId: currentUser._id,
    };

    const receiverId=currentUser.members.find(member=>member!==tid)
    socket.current.emit("sendMessage",{
      senderId:tid,
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
           <ChatList className={`text-white  p-4 `} >
            
          {conversation.map((c)=>{
            return(
                <ChatListName conversation={c} currentUser={tid} className={`${currentUser ?"text-blue-400":"text-black"} flex items-center mb-4  ${currentUser?"bg-[#d5e7f5]":"" }`} onClick={() => setCurrentUser(c)} />
            )
          })

          }
           </ChatList>
           </ChatAside>
            <ChatMain messages={messages} currentUser={tid} onChange={handleChange} value={newMessage} onClick={handleSubmit}/>
        </section>
      )
    
}


export default TrainerChatt;