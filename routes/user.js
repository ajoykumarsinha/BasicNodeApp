/*
 * GET users listing.
 */

var userdb = require('../schema/userdb');

exports.list = function(req, res) {
	res.send("respond with a resource");
};

exports.add = function(req, res) {
	 
	var user = new userdb.Users({
		userName: "Ajoy",
		userSurname: "Sinha"    // assign the _id from the our author Bob. This ID is created by default!
	});
	
	user.save(function (err) {
		console.log("User created !!!");
	    if (err) return handleError(err);
	});
};