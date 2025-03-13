import React from 'react'
import BusTicketHomeScreen from './Page/Home'
import AuthPage from './Components/AuthPage'
import UserHome from './Page/UserHome'
import TicketHistory from './Page/TicketHistory'
import { Routes, Route } from "react-router-dom"
import DriverHome from './Page/DriverHome'
import BusRegistration from './Page/BusRegistration'
import TripsPage from './Page/TripsPage'
import BookingHistoryPage from './Page/BookingHistoryPage'
import DriverDashboardPage from './Page/DriverDashboardPage'
import RevenuePage from './Page/RevenuePage'

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<BusTicketHomeScreen/>}/>
          <Route path="/login" element={<AuthPage/>}/>
          <Route path="/userHome" element={<UserHome/>}/>
          <Route path="/driverHome" element={<DriverHome/>}/>
          <Route path='/busRegistration' element={<BusRegistration/>}/>
          <Route path='/tripsPage' element={<TripsPage/>}/>
          <Route path='/driversBooking' element={<BookingHistoryPage/>}/>
          <Route path='/driverDashboard' element={<DriverDashboardPage/>}/>
          <Route path='/revenuePage' element={<RevenuePage/>}/>
            
            <Route path="/user" element={<BusTicketHomeScreen/>}/>
            <Route path="/user/login" element={<AuthPage/>}/>
            <Route path="/user/userHome" element={<UserHome/>}/>
            <Route path="/user/history" element={<TicketHistory/>}/>
            <Route path="/user/profile" element={<ProfilePage/>}/>
      </Routes>


    </>
  )
}

export default App