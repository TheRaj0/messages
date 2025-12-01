import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useMessages from '../../../hooks/useMessages'

const Messages = () => {
  const [loading, messages] = useMessages();

  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.lastElementChild?.scrollIntoView({
        behaviour:'smooth',
        block:'end'
      })
    }, 150);
  }, [messages])

  return (
    <div ref={ref} className='overflow-auto p-4 w-full text-white flex-grow [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
      {messages.map((m, i) => (
        <Message message={m} key={m._id}/>
      ))}
      {(!loading && !messages?.length) && (
        <p className='w-full text-center text-sm text-gray-400'>Send a message to start conversation</p>
      )}
      {loading && (
        <>
          <div className='animate-pulse flex-row-reverse ml-auto mb-2 flex gap-2 max-w-[70%]'>
            <div className='w-8 h-8 bg-slate-500 rounded-full'/>
            <div className='rounded-l-xl h-16 bg-slate-500 rounded-b-xl p-2 w-full'>
            </div>
          </div>
          <div className='animate-pulse mb-2 flex gap-2 max-w-[70%]'>
            <div className='w-8 h-8 bg-slate-500 rounded-full'/>
            <div className='rounded-r-xl h-16 bg-slate-500 rounded-b-xl p-2 w-full'>
          </div>
        </div>
      </>
      )}
    </div>
  )
}

export default Messages
