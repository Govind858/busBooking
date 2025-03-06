import React from 'react'
import BusTicketHomeScreen from './Page/Home'
import AuthPage from './Components/AuthPage'
import UserHome from './Page/UserHome'
import TicketHistory from './Page/TicketHistory'
import { Routes, Route } from "react-router-dom"
import ProfilePage from './Page/ProfilePage'
function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<BusTicketHomeScreen/>}/>
            <Route path="/login" element={<AuthPage/>}/>
            <Route path="/userHome" element={<UserHome/>}/>
            <Route path="/history" element={<TicketHistory/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>

        </Routes>
    </>
  )
}

export default App