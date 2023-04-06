import React from 'react'
import './App.css'
import {  Link, NavLink  } from 'react-router-dom' 
import { useRoutes } from 'react-router-dom/dist'
import { routers } from './routes'
 

export default function App() {
     let element = useRoutes(routers)
    return (
        <div>
            <div  >
                <NavLink className={(e) => {
                    console.log('home', e)
                    return e.isActive ? 'base one' : 'base'
                }} to='/home'>home</NavLink>
                 &nbsp; &nbsp; &nbsp;
                <Link to='/about' >about</Link>
            </div>
            <div>
                {/* 展示路由表 */}
                {element}
            </div>
        </div>
    )
}
