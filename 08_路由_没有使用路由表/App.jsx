import React, { lazy, Suspense } from 'react'
import './App.css'
import { Route, Link, NavLink, Routes, Navigate } from 'react-router-dom'
const About = lazy(() => import('./pages/About'))
const Home = lazy(() => import('./pages/Home'))
export default function App() {
    return (
        <div>
            <div  >
                <NavLink className={(e) => {
                    console.log('home', e)
                    return e.isActive ? 'base one' : 'base'
                }} to='/home'>home</NavLink>
                <Link to='/about' >about</Link>
            </div>
            <div>
                <Routes>
                    <Route path='/home' element={
                        <Suspense fallback={<h1>Loading…………</h1>}>
                            <Home />
                        </Suspense>} />
                    <Route path='/about/*' element={
                        <Suspense fallback={<h1>Loading…………</h1>}>
                            <About />
                        </Suspense>} />
                    <Route path='/' element={<Navigate to='/home' />} />
                </Routes>
            </div>
        </div>
    )
}
