
# Node.js with SQL Database

This project demonstrates how to perform basic CRUD (Create, Read, Update, Delete) operations using Node.js with a SQL (MySQL) database. The implementation includes creating a RESTful API to interact with the database.

## Features
- **Create**: Add new records to the database.
- **Read**: Retrieve records from the database.
- **Update**: Modify existing records in the database.
- **Delete**: Remove records from the database.

## Prerequisites
Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher recommended)
- [MySQL Server](https://dev.mysql.com/downloads/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Packages

1. [Faker](https://www.npmjs.com/package/@faker-js/faker) (For Genarate Fake User Info)
    ```bash
     $ npm i @faker-js/faker   
    ```
2. [MySQL](https://www.npmjs.com/package/mysql2) (For create a connection with MySQl server)
    ```bash
     $ npm i mysql2  
    ```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rakib-utsho/NODE_WITH_SQL.git
   cd node-with-sql
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the MySQL database:
   - Install mysql2 package
   - Import mysql2 for connection to database in your index.js file with your MySQL credentials:
     ```javascript
     module.exports = {
       host: 'localhost',
       user: 'your-username',
       database: 'your-database-name',
       password: 'your-password',
     };
     ```

4. Start the server:
   ```bash
   npm index.js
   ```
## Using SQL From VS CODE CLI - Windows 10
    - Open Terminal on VS Code
    - Write the commands-
       $ cd "C:\Program Files\MySQL\MySQL Server 8.0"
       $ .\bin\mysql.exe -h localhost -u root -p 


## API Endpoints

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| GET    | `/api/items`   | Retrieve all items       |
| GET    | `/api/items/:id` | Retrieve a single item by ID |
| POST   | `/api/items`   | Create a new item        |
| PUT    | `/api/items/:id` | Update an item by ID     |
| DELETE | `/api/items/:id` | Delete an item by ID     |

### Example Requests

#### Create an Item
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"name": "Example Item", "description": "This is an example."}' \
  http://localhost:3000/api/items
```

#### Get All Items
```bash
curl http://localhost:3000/api/items
```

## Project Structure
```
node-with-sql/
├── package.json
├── dbConfig.js
├── server.js
├── routes/
│   └── itemRoutes.js
├── controllers/
│   └── itemController.js
└── models/
    └── itemModel.js
```

## Technologies Used
- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web framework for creating RESTful APIs.
- **MySQL**: Relational database management system.
- **npm**: Package manager for Node.js modules.

## License
This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute to this project by submitting issues or pull requests!
