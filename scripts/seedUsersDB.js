const db = require("../models");
const connectDB = require("../config/connectDB")

connectDB();

const userSeed = [
  {
    username: "whiteRabbit",
    password: "password"
  },
  {
    username: "blackRabbit",
    password: "youwillneverfindouthaha"
  },
  {
    username: "user",
    password: "user"
  }
];

db.User
  .deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  