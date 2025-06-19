import React, { useContext } from 'react'
import {AuthContext} from '../../../contexs/authContext'
import { ConversationContext } from '../../../contexs/conversationContext';
import {SocketContext} from '../../../contexs/socketContext'
const Message = ({message}) => {
  const {user} = useContext(AuthContext);
  const {selectedConversation} = useContext(ConversationContext);
  const {onlineUsers} = useContext(SocketContext);

  const isOur = message.senderId.toString() === user._id.toString();
  const profilePic = isOur ? user.profilePicture : selectedConversation.profilePicture;
  const isOnline = onlineUsers.includes(message.senderId);
  return (
    <div className={`${isOur ? 'flex-row-reverse ml-auto' : ''} mb-2 flex gap-2 max-w-[70%]`}>
      <div className='relative'>
        <img className='w-8 h-8 min-w-8' src={isOur ? user.profilePicture : profilePic} alt="" />
        {isOnline && <div className='absolute top-0 right-0 w-2 h-2 rounded-full bg-green-500'></div>}
      </div>
      <div>
        <p
          className={`${isOur ? ' rounded-l-xl bg-blue-500' : 'rounded-r-xl bg-slate-500'} rounded-b-xl p-2 w-full`}
          style={{ maxWidth: '67vw', wordWrap: 'break-word' }}
        >
          {message.text}
        </p>
        <p className={`${isOur && 'text-end' } max-w-full text-xs text-slate-500`}>{new Date(message.createdAt).getHours()+':'+new Date(message.createdAt).getMinutes()+' - '+new Date(message.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  )
}   

export default Message
