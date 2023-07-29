import ChatHeader from "./ChatHeader";
import "./Chatt.css"
import MessageInput from "./MessageInput";
import MessageDisplay from "./MessageDisplay";
const ChatMain=({messages,currentUser,onChange,value,onClick})=>{
    return(
        <main className="main_">
            <ChatHeader src={""} text={"Vinayak"}/>
            <MessageDisplay messages={messages} currentUser={currentUser}/>
            <MessageInput onChange={onChange} value={value} onClick={onClick}/>
        </main>
    )
}

export default ChatMain;