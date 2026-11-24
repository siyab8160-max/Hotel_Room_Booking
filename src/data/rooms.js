
const rooms = [
  {
    id: 1,
    roomNo: "A-101",
    block: "A",
    floor: 1,
    type: "AC",
    capacity: 2,
    occupied: 1,
    rentPerMonth: 9000,
    facilities: ["Wi-Fi", "Attached Washroom", "Study Table"],
    isBooked: false
  },
  {
    id: 2,
    roomNo: "A-102",
    block: "A",
    floor: 1,
    type: "Non-AC",
    capacity: 3,
    occupied: 3,
    rentPerMonth: 5500,
    facilities: ["Wi-Fi", "Study Table"],
    isBooked: false
  },
  {
    id: 3,
    roomNo: "A-201",
    block: "A",
    floor: 2,
    type: "AC",
    capacity: 1,
    occupied: 0,
    rentPerMonth: 12000,
    facilities: ["Wi-Fi", "Attached Washroom", "Balcony", "Study Table"],
    isBooked: false
  },
  {
    id: 4,
    roomNo: "B-104",
    block: "B",
    floor: 1,
    type: "Non-AC",
    capacity: 4,
    occupied: 2,
    rentPerMonth: 4500,
    facilities: ["Common Washroom", "Study Table"],
    isBooked: false
  },
  {
    id: 5,
    roomNo: "B-203",
    block: "B",
    floor: 2,
    type: "AC",
    capacity: 2,
    occupied: 2,
    rentPerMonth: 9500,
    facilities: ["Wi-Fi", "Attached Washroom"],
    isBooked: false
  },
  {
    id: 6,
    roomNo: "B-305",
    block: "B",
    floor: 3,
    type: "Non-AC",
    capacity: 2,
    occupied: 0,
    rentPerMonth: 6000,
    facilities: ["Wi-Fi", "Balcony"],
    isBooked: false
  },
  {
    id: 7,
    roomNo: "C-110",
    block: "C",
    floor: 1,
    type: "AC",
    capacity: 3,
    occupied: 1,
    rentPerMonth: 8000,
    facilities: ["Wi-Fi", "Attached Washroom", "Cupboard"],
    isBooked: false
  },
  {
    id: 8,
    roomNo: "C-212",
    block: "C",
    floor: 2,
    type: "Non-AC",
    capacity: 3,
    occupied: 2,
    rentPerMonth: 5000,
    facilities: ["Common Washroom", "Cupboard"],
    isBooked: false
  },
  {
    id: 9,
    roomNo: "C-301",
    block: "C",
    floor: 3,
    type: "AC",
    capacity: 1,
    occupied: 1,
    rentPerMonth: 13000,
    facilities: ["Wi-Fi", "Attached Washroom", "Balcony", "Mini Fridge"],
    isBooked: false
  },
  {
    id: 10,
    roomNo: "D-108",
    block: "D",
    floor: 1,
    type: "Non-AC",
    capacity: 2,
    occupied: 1,
    rentPerMonth: 5800,
    facilities: ["Wi-Fi", "Study Table", "Cupboard"],
    isBooked: false
  }
];

export default rooms;
