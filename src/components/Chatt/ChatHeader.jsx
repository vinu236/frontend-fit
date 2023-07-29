import React from 'react'
import ChatAvatar from './ChatAvatar'
import "./message.css"

const ChatHeader = ({text,src}) => {
  return (
    <div className='flex w-full py-4 p-2 bg-[#fff] border border-b-8-[#aaa]'>
<ChatAvatar className="messageImg" src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
<p className='text-lg font-medium'>{text}</p>
    </div>
  )
}

export default ChatHeader