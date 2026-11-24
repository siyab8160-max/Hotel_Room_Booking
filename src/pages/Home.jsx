import { Link } from "react-router";

function Home({ rooms }) {
  const totalRooms = rooms.length;

  const availableRooms = rooms.filter(
    (room) => room.occupied < room.capacity
  ).length;

  const bookedRoom = rooms.find((room) => room.isBooked);

  return (
    <div className="page">
      <div className="hero">
        <h1>Welcome to HostelEase</h1>

        <p>
          Find your perfect hostel room.
          Comfortable stays, simple booking.
        </p>

        <Link to="/rooms" className="primary-btn">
          Explore Rooms
        </Link>
      </div>

      <h2>Hostel Overview</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Rooms</h3>
          <h1>{totalRooms}</h1>
        </div>

        <div className="stat-card">
          <h3>Rooms with Beds Left</h3>
          <h1>{availableRooms}</h1>
        </div>

        <div className="stat-card">
          <h3>Your Booked Room</h3>
          <h1>{bookedRoom ? bookedRoom.roomNo : "No booking yet"}</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;