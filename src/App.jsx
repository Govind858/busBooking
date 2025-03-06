import React from 'react'
import BusTicketHomeScreen from './Page/Home'
import AuthPage from './Components/AuthPage'
import UserHome from './Page/UserHome'
import { Routes, Route } from "react-router-dom"
import DriverHome from './Page/DriverHome'

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<BusTicketHomeScreen/>}/>
          <Route path="/login" element={<AuthPage/>}/>
          <Route path="/userHome" element={<UserHome/>}/>
          <Route path="driverHome" element={<DriverHome/>}/>
      </Routes>
    </>
  )
}

export default App