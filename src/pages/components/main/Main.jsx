import React, { useContext } from 'react'
import Messages from './Messages'
import InputForm from './InputForm'
import Header from './Header'
import { ConversationContext } from '../../../contexs/conversationContext'
import { AuthContext } from '../../../contexs/authContext'

const Main = () => {
  const {selectedConversation} = useContext(ConversationContext);
  const {user} = useContext(AuthContext);
  return (
    <>
    {selectedConversation?._id ? 
      <div className='flex flex-col w-full h-full sm:w-2/3 bg-[url("https://theraj0.github.io/portfolio/background.jpg")] bg-cover bg-no-repeat bg-center'>
          <Header />
          <Messages />
          <InputForm />
      </div> : 
      <div className='flex w-full h-full sm:w-2/3 items-center justify-center bg-[url("https://theraj0.github.io/portfolio/background.jpg")] bg-cover bg-no-repeat bg-center'>
        <div>
          <p className='text-2xl text-white'>
            Hello <span className='text-blue-500'>{user.fullName}</span>
          </p>
          <p className='text-sm text-slate-500 text-center'>Select a conversation from left</p>
        </div>
      </div>
    }
    </>
  )
}

export default Main
