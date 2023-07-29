
const ChatList=({name,className,children})=>{

    return(
             <ul className={`${className}`}>
                {children}
            </ul>
    )
}


export default ChatList;