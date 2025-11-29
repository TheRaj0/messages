 import React from 'react'
import Logout from './Logout'
import Search from './Search'
import Conversations from './Conversations'
 
 const Sidebar = () => {
   return (
     <div className='bg-slate-600 w-full p-4 pb-0 relative h-full flex flex-col sm:w-1/3'>
        <Search />
        <div className='w-full bg-slate-500 h-[2px] mb-2'></div>
        <Conversations/>
        <Logout />
     </div>
   )
 }
 
 export default Sidebar
