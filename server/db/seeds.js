use hotel_hub;
db.dropDatabase();

db.guests.insertMany([
  {
    name: "James Cordon",
    email: "jamescordon@gmail.com",
    checkedin: false
  },
  {
    name: "Eugene Kim",
    email: "eugenekim@gmail.com",
    checkedin: false
  },
  {
    name: "Juan Gonzalez",
    email: "juanchiquitito@gmail.com",
    checkedin: true
  }
])
