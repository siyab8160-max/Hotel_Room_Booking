import { Link } from "react-router";

function RoomCard({ room, rooms, bookRoom, cancelBooking }) {
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
        Book Room
      </button>
    );
  }

  return (
    <div className="room-card">
      <div className="room-card-top">
        <h3>{room.roomNo}</h3>

        <span className={bedsLeft === 0 ? "badge full" : "badge available"}>
          {bedsLeft === 0 ? "Full" : `${bedsLeft} Beds Left`}
        </span>
      </div>

      <p>Block: {room.block}</p>
      <p>Floor: {room.floor}</p>
      <p>Type: {room.type}</p>

      <h2>₹{room.rentPerMonth}</h2>
      <p className="muted">Per month</p>

      <div className="card-actions">
        <Link to={`/rooms/${room.id}`} className="details-btn">
          View Details
        </Link>

        {button}
      </div>
    </div>
  );
}

export default RoomCard;