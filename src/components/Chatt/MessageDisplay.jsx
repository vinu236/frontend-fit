import React from 'react'
import ChatMessage from './ChatMessage'
const MessageDisplay = ({messages,currentUser}) => {
  console.log(messages)
  const renderMessage=messages?.map((m,index)=>{
    console.log(m)
    return(
      <ChatMessage sender={m.sender===currentUser} text={m.text} date={m.createdAt}/>
    )
  })
  return (
    <div className=' flex flex-col gap-4 overflow-y-auto max-h-[450px]'>
      {renderMessage}

        {/* <ChatMessage/> */}
    </div>
  )
}

export default MessageDisplay