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

  try{
    connection.query("SHOW TABLES", 
        (err, result) => {
            if(err) throw err;
            console.log(result);
        }
    )
  }catch(err){
    console.log(err);
  }

// FAKER PACKAGE FOR GENERATE FAKE USER INFO
let getRandomUser = () => {
    return {
      id: faker.string.uuid(),
      username: faker.internet.username(), // before version 9.1.0, use userName()
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }
