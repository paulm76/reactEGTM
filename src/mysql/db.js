//import db from './mysql'
import mysql from 'mysql';


//export const doCreateUser = (id, lastName, firstName, pseudo, email, street, zipCode, city) =>
  //mysql connnection

//export const doCreateTeam = (admin, name) =>
  //mysql connnection

//export const onGetTeam = (admin, name) =>
  //mysql connnection

  const db =mysql.createConnection({
  	host: "localhost",
  	user: "root",
  	password: "root",
  	port:"3006"
  });



export const getTeamData = function(teamid,callback){
  console.log(db)
  //db.connect();
  //db.query('SELECT * FROM mydb.equipes WHERE id = ?', [teamid], callback);
  //db.end();
}
