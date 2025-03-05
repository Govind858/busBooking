import React from 'react'
import BusTicketHomeScreen from './Page/Home'
import AuthPage from './Components/AuthPage'
import UserHome from './Page/UserHome'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<BusTicketHomeScreen/>}/>
          <Route path="/login" element={<AuthPage/>}/>
          <Route path="/userHome" element={<UserHome/>}/>
      </Routes>
      <UserHome/>
    </>
  )
}

export default App