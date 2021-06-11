const express = require('express');
const app = express();
const mysql = require("mysql");
const con = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
});

// mysql code

con.connect(function (err) {
	if (err) {
		console.log('Error connecting to db: ', err);
		return;
	}
	console.log('Connection to db established');
	con.query('CREATE TABLE IF NOT EXISTS visits (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, ts BIGINT)', function (err) {
		if (err) throw err;
	});
});

// Request handling
app.get('/', function (req, res) {
	// create table if not exist
	con.query('INSERT INTO visits (ts) values (?)', Date.now(), function (err, dbRes) {
		if (err) throw err;
		res.send('Hello World! You are visitor number ' + dbRes.insertId);
	});
});


// server
const server = app.listen(3000, function () {
	const host = server.address().address;
	const port = server.address().port;
	
	console.log('Example app listening at http://%s:%s', host, port);
});
