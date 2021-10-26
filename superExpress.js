var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sqlite3.db');

app.get('/dataTable', (req, res) => {
	sql = "SELECT rowid AS id, info FROM lorem";
	db.all(sql, [], (err, rows) => {
		res.render('table', {recs:rows});
	})
})

app.get('/data', (req, res) => {
	sql = "SELECT rowid AS id, info FROM lorem";
	db.all(sql, [], (err, rows) => {
		res.send(rows);
	});
})


app.get('/', (req, res) => {
   res.send('Hello World');
})


var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
