/**
 * http://usejsdoc.org/
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  userSurname: {
	    type: String,
	    required: true
	  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

var Users = mongoose.model("Users", UserSchema);

//expose the schema
module.exports = {
		Users : Users
};
