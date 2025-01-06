const { faker } = require('@faker-js/faker');

// Get the client MySQL
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'DB@104#-ac!',
  });

  // Inserting new data
  let q = "INSERT INTO user (id, username, email, password) VALUES ?";
  let users = [
    ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
    ["123c", "123_newuserc", "abc@gmail.comc", "abcc"],
  ]; 

  try{
    connection.query(q, [users], (err, result) => {
            if(err) throw err;
            console.log(result);
        });
  }catch(err){
    console.log(err);
  }
  connection.end();

// FAKER PACKAGE FOR GENERATE FAKE USER INFO
let getRandomUser = () => {
    return {
      id: faker.string.uuid(),
      username: faker.internet.username(), // before version 9.1.0, use userName()
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }
