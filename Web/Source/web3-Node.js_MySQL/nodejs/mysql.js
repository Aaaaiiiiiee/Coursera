var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'yellow-skink-xxkb9zba.ws-us03.gitpod.io',
  user     : 'root',
  password : 'wj3889!',
  database : 'opentutorials'
});
 
connection.connect();
 
connection.query('SELECT * FROM topic', function (error, results, fields) {
  if (error){
      console.log(error);
  }
  console.log(results);
});
 
connection.end();