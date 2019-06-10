const userModel = require ("../models/user");
const user = {};

user.ping = function (req, res) {
	res.send ("Ping!\n");
};

user.listall = function (req, res) {
	let users = userModel.getAll ();
	users = users.split (",");

	for (let i = 0 ; i < users.length ; i++) {
		users [i] = users [i].trim ();
	}

	res.send (users);
};

module.exports = user;
