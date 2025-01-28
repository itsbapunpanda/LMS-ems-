import mysql from "mysql2";

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeems_db",
    port:"3309"
});

con.connect((err) => {
    if (err) {
        console.error("Database connection error:", err.message);
    } else {
        console.log("Connected to the database.");
    }
});

export default con;
