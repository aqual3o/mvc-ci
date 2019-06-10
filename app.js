/* eslint no-console : off */
let express = require ("express");
let user    = require ("./routes/user");

let app = express ();

app.get ('/', function (req, res) {
	res.send ("ping\n");
});

app.use ("/user", user);

app.listen (3000);
console.log ({port : 3000}, 'Server started on port 3000');
