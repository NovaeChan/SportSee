import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import User from './pages/User'
import Error from './pages/Error'

import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'


const App = () => {
  return (
      <>
          <Header />
          <main>
                <SideBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user/:id" element={<User />} />
                    <Route path="*" element={<Error />} />
                </Routes>
          </main>
      </>
  )
}

export default App

