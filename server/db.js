const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    database: "employeedb",
    password: "1920Rockjazz",
    port: 5432
});


module.exports = pool;