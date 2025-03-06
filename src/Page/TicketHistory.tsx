import React from 'react'
import PreviousTickets from '../Components/PreviousTickets'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer '
export default function TicketHistory() {
  return (
   <>
        <NavBar/>
        <br />
                <div style={{margin: 'auto', maxWidth: '800px'}}>
                    <PreviousTickets/>
                </div>
        <br />
        <Footer/>
    </>
  )
}
