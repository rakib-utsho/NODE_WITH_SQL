const { faker } = require('@faker-js/faker');
const mysql = require('mysql2'); // Get the client MySQL
const express = require('express');
const app = express();
const path = require("path");

// PORT Declared
let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'DB@104#-ac!',
  });

  // FAKER PACKAGE FOR GENERATE FAKE USER INFO
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// Home Route
app.get("/", (req, res)=> {
  let q = `SELECT count(*) FROM user`;
  try{
    connection.query(q, (err, result) => {
            if(err) throw err;
            let count = (result[0]["count(*)"]);
            res.render("home.ejs", {count});
        });
  }catch(err){
    console.log(err);
    res.send("Some Error in Database");
  }
});

// Show Route
app.get("/user", (req, res)=>{
  let q = `SELECT * FROM user`;
  try{
    connection.query(q, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.render("home.ejs", {count});
        });
  }catch(err){
    console.log(err);
    res.send("Some Error in Database");
  }
});

app.listen(port, ()=>{
  console.log(`server is listening to port ${port}`);
});


  // Inserting new data
  // let q = "INSERT INTO user (id, username, email, password) VALUES ?";
  
  // let data = [];
  // for(let i = 1; i<=100; i++) {
  //   data.push(getRandomUser()); // 100 fake user data
  // }

  // try{
  //   connection.query(q, [data], (err, result) => {
  //           if(err) throw err;
  //           console.log(result);
  //       });
  // }catch(err){
  //   console.log(err);
  // }
  // connection.end();
