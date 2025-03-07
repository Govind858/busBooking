import React from 'react'
import BusTicketHomeScreen from './Page/Home'
import AuthPage from './Components/AuthPage'
import UserHome from './Page/UserHome'
import { Routes, Route } from "react-router-dom"
import DriverHome from './Page/DriverHome'
import BusRegistration from './Page/BusRegistration'
import TripsPage from './Page/TripsPage'
import BookingHistoryPage from './Page/BookingHistoryPage'
import DriverDashboardPage from './Page/DriverDashboardPage'

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<BusTicketHomeScreen/>}/>
          <Route path="/login" element={<AuthPage/>}/>
          <Route path="/userHome" element={<UserHome/>}/>
          <Route path="/driverHome" element={<DriverHome/>}/>
          <Route path='/busRegistration' element={<BusRegistration/>}/>
          <Route path='tripsPage' element={<TripsPage/>}/>
          <Route path='/driversBooking' element={<BookingHistoryPage/>}/>
          <Route path='driverDashboard' element={<DriverDashboardPage/>}/>
      </Routes>
    </>
  )
}

export default App