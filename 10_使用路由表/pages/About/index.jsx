import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
// import News from './News'
// import Message from './Message'
 
export default  function About() {

    return (
      <div>
        <h1>About</h1>
        <hr />
        <div style={{display:"flex"}}>
          <NavLink to='news'>news</NavLink>
          &nbsp; &nbsp; &nbsp;
          <NavLink to='message'>message</NavLink>
        </div>
        <hr />
        <div>
          
          <Outlet />
        </div>
      </div>
    )
  
}
