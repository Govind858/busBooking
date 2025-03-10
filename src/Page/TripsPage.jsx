import React from 'react'
import TripPlanner from '../BusDriver/Components/TripPlanner'
import DriverNavbar from '../BusDriver/Components/DriverNavBar'
import WeeklyReport from  '../BusDriver/Components/WeeklyReport'

function TripsPage() {
  return (
    <div>
        {/* <DriverNavbar/>
        <TripPlanner/> */}
       <WeeklyReport/>
    </div>
  )
}

export default TripsPage