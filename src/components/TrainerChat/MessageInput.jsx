import InputField from "../InputField/inputField"
import{AiOutlineSend} from "react-icons/ai"
const MessageInput=({onChange,value,onClick})=>{
    return(
        <div className=" flex gap-3 items-center px-3">
            <InputField type={"text"} className={"w-full py-3 px-4 rounded-full bg-[#d5e7f5]"} placeholder={"Text-Message.."} onChange={onChange} value={value}/>
            <AiOutlineSend className="text-2xl cursor-pointer"onClick={onClick}/>
        </div>      
    )
}

export default MessageInput;