import mysql from "mysql2";

// Create the connection to database
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "universitas_abc",
});

export default connection;
