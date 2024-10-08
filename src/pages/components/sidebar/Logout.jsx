import React from 'react'
import useLogout from '../../../hooks/useLogout';

const Logout = () => {
    const [loading, logout] = useLogout();
  return (
    <div className=' px-2 py-2 border-t border-slate-500 sticky bottom-0 text-white bg-slate-600 w-full'>
      <button className=''  disabled={loading} onClick={logout}>
        {loading ? <div className='animate-spin h-5 w-5 rounded-full border-4 border-slate-400 border-r-slate-200 mx-auto'/> : 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
          </svg>
        }
      </button>
    </div>
  )
}

export default Logout
