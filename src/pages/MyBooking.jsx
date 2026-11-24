import { Link } from "react-router";

function MyBooking({ rooms, cancelBooking }) {
  const bookedRoom = rooms.find((room) => room.isBooked);

  if (!bookedRoom) {
    return (
      <div className="page empty-state">
        <h1>My Booking</h1>

        <h2>You have not booked any room</h2>

        <p>Explore available rooms and book your stay.</p>

        <Link to="/rooms" className="primary-btn">
          Browse Rooms
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="booking-card">
        <span className="badge available">Booking Confirmed</span>

        <h1>Room {bookedRoom.roomNo}</h1>

        <p>Block: {bookedRoom.block}</p>
        <p>Room Type: {bookedRoom.type}</p>
        <p>Floor: {bookedRoom.floor}</p>

        <h2>₹{bookedRoom.rentPerMonth}</h2>
        <p>Monthly Rent</p>

        <button
          className="cancel-btn"
          onClick={() => cancelBooking(bookedRoom.id)}
        >
          Cancel Booking
        </button>
      </div>
    </div>
  );
}

export default MyBooking;