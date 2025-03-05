import React from 'react'
import NavBar from '../Components/NavBar'
import RouteSelection from '../Components/RouteSelection'
import RecentTrips from '../Components/RecentTrips '
import Footer from '../Components/Footer '

function UserHome() {
  return (
    <>
            <NavBar/>
            <RouteSelection/>
            <RecentTrips/>
            <Footer/>
    </>
  )
}

export default UserHome