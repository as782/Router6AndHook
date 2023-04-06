import React, { Component } from 'react'
import { NavLink,Routes,Route,Outlet } from 'react-router-dom'
// import News from './News'
// import Message from './Message'
 
export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <hr />
        <div style={{display:"flex"}}>
          <NavLink to='/about/news'>news</NavLink>
          &nbsp; &nbsp; &nbsp;
          <NavLink to='/about/message'>message</NavLink>
        </div>
        <hr />
        <div>
          {/* <Routes>
          
            <Route path='news' element={<News/>}/> 
            <Route path='message' element={<Message/>}/> 
          </Routes> */}
          <Outlet />
        </div>
      </div>
    )
  }
}
