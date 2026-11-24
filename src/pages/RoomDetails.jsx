import { useParams, Link } from "react-router";

function RoomDetails({ rooms, bookRoom, cancelBooking }) {
  const { id } = useParams();

  const room = rooms.find((r) => r.id === Number(id));

  if (!room) {
    return (
      <div className="page">
        <h2>Room Not Found</h2>
        <Link to="/rooms">Back to Rooms</Link>
      </div>
    );
  }

  const bedsLeft = room.capacity - room.occupied;

  const anotherRoomBooked = rooms.find(
    (r) => r.isBooked && r.id !== room.id
  );

  let button;

  if (room.isBooked) {
    button = (
      <button className="cancel-btn" onClick={() => cancelBooking(room.id)}>
        Cancel Booking
      </button>
    );
  } else if (bedsLeft === 0) {
    button = <button disabled>Room Full</button>;
  } else if (anotherRoomBooked) {
    button = <button disabled>Already booked another room</button>;
  } else {
    button = (
      <button className="book-btn" onClick={() => bookRoom(room.id)}>
        Book This Room
      </button>
    );
  }

  return (
    <div className="page">
      <div className="details-card">
        <h1>Room {room.roomNo}</h1>

        <p>Block: {room.block}</p>

        <div className="details-grid">
          <div>
            <p>Room Type</p>
            <h3>{room.type}</h3>
          </div>

          <div>
            <p>Floor</p>
            <h3>{room.floor}</h3>
          </div>

          <div>
            <p>Capacity</p>
            <h3>{room.capacity}</h3>
          </div>

          <div>
            <p>Occupied</p>
            <h3>{room.occupied}</h3>
          </div>

          <div>
            <p>Beds Left</p>
            <h3>{bedsLeft}</h3>
          </div>

          <div>
            <p>Monthly Rent</p>
            <h3>₹{room.rentPerMonth}</h3>
          </div>
        </div>

        <h2>Facilities</h2>

        <ul>
          {room.facilities.map((facility) => (
            <li key={facility}>{facility}</li>
          ))}
        </ul>

        {button}

        <p>
          <Link to="/rooms">Back to Rooms</Link>
        </p>
      </div>
    </div>
  );
}

export default RoomDetails;