require("dotenv").config();
const mysql = require("mysql2");

const urlDB = `mysql://root:25tiUpmNnK5MTejxtLZC@containers-us-west-171.railway.app:5970/railway`;

const connection = mysql.creatConnection(urlDB);

module.exports = connection;
