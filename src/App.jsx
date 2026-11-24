import { useState } from "react";
import { Routes, Route } from "react-router";

import roomsData from "./data/rooms";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import MyBooking from "./pages/MyBooking";

function App() {
  const [rooms, setRooms] = useState(roomsData);

  function bookRoom(id) {
    const bookedRoom = rooms.find((room) => room.isBooked);

    if (bookedRoom) {
      return;
    }

    const updatedRooms = rooms.map((room) => {
      if (room.id === id && room.occupied < room.capacity) {
        return {
          ...room,
          isBooked: true,
          occupied: room.occupied + 1
        };
      }

      return room;
    });

    setRooms(updatedRooms);
  }

  function cancelBooking(id) {
    const updatedRooms = rooms.map((room) => {
      if (room.id === id && room.isBooked) {
        return {
          ...room,
          isBooked: false,
          occupied: room.occupied - 1
        };
      }

      return room;
    });

    setRooms(updatedRooms);
  }

  return (
    <>
      <Navbar rooms={rooms} />

      <Routes>
        <Route
          path="/"
          element={<Home rooms={rooms} />}
        />

        <Route
          path="/rooms"
          element={
            <Rooms
              rooms={rooms}
              bookRoom={bookRoom}
              cancelBooking={cancelBooking}
            />
          }
        />

        <Route
          path="/rooms/:id"
          element={
            <RoomDetails
              rooms={rooms}
              bookRoom={bookRoom}
              cancelBooking={cancelBooking}
            />
          }
        />

        <Route
          path="/my-booking"
          element={
            <MyBooking
              rooms={rooms}
              cancelBooking={cancelBooking}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;