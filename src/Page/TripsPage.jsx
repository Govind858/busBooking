import React from 'react'
import TripPlanner from '../BusDriver/Components/TripPlanner'
import DriverNavbar from '../BusDriver/Components/DriverNavBar'
import WeeklyReport from  '../BusDriver/Components/WeeklyReport'
import QRScanner from '../BusDriver/Components/QRScanner'

function TripsPage() {
  return (
    <div>
        <DriverNavbar/>
        <TripPlanner/>
    </div>
  )
}

export default TripsPage