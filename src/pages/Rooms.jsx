import { useState } from "react";
import RoomCard from "../components/RoomCard";

function Rooms({ rooms, bookRoom, cancelBooking }) {
  const [filterType, setFilterType] = useState("All");

  const filteredRooms = rooms.filter((room) => {
    if (filterType === "All") {
      return true;
    }

    return room.type === filterType;
  });

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <h1>Available Rooms</h1>
          <p>Explore and book your hostel room.</p>
        </div>

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="All">All Rooms</option>
          <option value="AC">AC</option>
          <option value="Non-AC">Non-AC</option>
        </select>
      </div>

      <div className="rooms-grid">
        {filteredRooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            rooms={rooms}
            bookRoom={bookRoom}
            cancelBooking={cancelBooking}
          />
        ))}
      </div>

      {filteredRooms.length === 0 && <p>No rooms found.</p>}
    </div>
  );
}

export default Rooms;