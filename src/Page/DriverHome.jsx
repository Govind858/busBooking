
import DriverDashboard from '../BusDriver/Components/DriverDashboard'
import DriverNavbar from '../BusDriver/Components/DriverNavBar'
import TodaysBooking from '../BusDriver/Components/TodaysBooking'

function DriverHome() {
  const bookingsData = [
    {
      id: 1,
      userName: 'John Doe',
      fromLocation: 'New York',
      toLocation: 'Los Angeles',
      date: '2025-03-07',
      time: '10:00 AM',
      price: 150.0,
    },
    {
      id: 1,
      userName: 'John Doe',
      fromLocation: 'New York',
      toLocation: 'Los Angeles',
      date: '2025-03-07',
      time: '10:00 AM',
      price: 150.0,
    }
  ];
  return (
    <div>
       <DriverNavbar/>
       <DriverDashboard/>
       <TodaysBooking bookings={bookingsData}/>
    
    </div>
  )
}

export default DriverHome