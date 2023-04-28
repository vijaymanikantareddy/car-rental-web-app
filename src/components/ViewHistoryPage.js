import React, { useState, useEffect } from 'react';

const ViewHistoryPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Implement logic to fetch booking history from backend API
    // and update the bookings state with the data
    const fetchBookingHistory = async () => {
      try {
        const response = await fetch('https://api.example.com/bookings/history');
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching booking history:', error);
      }
    }
    fetchBookingHistory();
  }, []);

  return (
    <div>
      <h1>View History</h1>
      <ul>
        {bookings.map(booking => (
          <li key={booking.bookingId}>
            <div>Booking ID: {booking.bookingId}</div>
            <div>Car Model: {booking.carModel}</div>
            <div>Status: {booking.status}</div>
            {/* Render additional details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewHistoryPage;
