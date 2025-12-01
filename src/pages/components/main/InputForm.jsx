import React, { useState } from 'react'
import useSendMessage from '../../../hooks/useSendMessage';

const InputForm = () => {
  const [text, setText] = useState('');
  const [loading, send] = useSendMessage();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    send(text);
    setText('');
  }
  return (
    <div className='sticky bottom-0 p-2 w-full'>
      <form onSubmit={handleSubmit} className='flex gap-2 items-center justify-center w-full'>
        <input 
            value={text}
            onChange={(ev) => setText(ev.target.value)}
            type="text"
            placeholder='Aa'
            className='outline-none w-4/5 px-4 py-1 rounded-sm text-lg'
        />
        <button disabled={loading} className='p-2 bg-blue-500 rounded-sm text-white '>
            {loading ? <div className='animate-spin h-5 w-5 rounded-full border-4 border-slate-400 border-r-slate-200 mx-auto'/> : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
            )}
        </button>
      </form>
    </div>
  )
}

export default InputForm
