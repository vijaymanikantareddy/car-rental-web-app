import React, { useState, useEffect } from 'react';

const ViewStatusPage = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    // Implement logic to fetch booking details from backend API
    // and update the bookingDetails state with the data
    const fetchBookingDetails = async () => {
      try {
        const response = await fetch('https://api.example.com/bookings/12345');
        const data = await response.json();
        setBookingDetails(data);
      } catch (error) {
        console.error('Error fetching booking details:', error);
      }
    }
    fetchBookingDetails();
  }, []);

  return (
    <div>
      <h1>View Status</h1>
      {bookingDetails ? (
        <div>
          <div>Booking ID: {bookingDetails.bookingId}</div>
          <div>Car Model: {bookingDetails.carModel}</div>
          <div>Status: {bookingDetails.status}</div>
          {/* Render additional details as needed */}
        </div>
      ) : (
        <div>Loading booking details...</div>
      )}
    </div>
  );
}

export default ViewStatusPage;
