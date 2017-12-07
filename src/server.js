const express = require('express')
const app = express()
const cors=require('cors')

var mysql = require("mysql");
//Database connection
app.use(function(req, res, next){
	connection = mysql.createPool({
		host     : 'localhost',
		user     : 'root',
		password : 'root',
		database : 'egtm'
	});
	next();
});
app.use(cors());

app.get('/', function(req, res, next) {
	connection.query('SELECT * from utilisateur', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
});

app.listen(3001, () => console.log('test recuperation de donnée api!'))
