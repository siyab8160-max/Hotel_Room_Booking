import { Link } from "react-router";

function Navbar({ rooms }) {
  const bookedRoom = rooms.find((room) => room.isBooked);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">HostelEase</Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>

        <Link to="/my-booking">
          My Booking {bookedRoom && <span className="nav-count">1</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;