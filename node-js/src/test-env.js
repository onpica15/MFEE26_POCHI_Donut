require("dotenv").config();

const { DB_USER, DB_PASS, DB_PORT } = process.env;

console.log({ DB_PORT, DB_USER, DB_PASS });
