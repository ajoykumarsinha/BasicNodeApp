/**
 * http://usejsdoc.org/
 */
const mongoose = require("mongoose");

const dbURI = "mongodb+srv://dbadmin:dbadmin123@cluster0-pq59b.mongodb.net/testdb?retryWrites=true";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established another new change !");
  },
  err => {
    console.log("Error connecting Database instance due to following error: ", err);
  }
);

/
// require any models

require("../schema/userdb");