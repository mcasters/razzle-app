export async function mySql() {
    // get the client
    const mysql = require('mysql2/promise');
    // create the connection
    const connection = await mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME});
    // query database
    const [rows, fields] = await connection.execute(
        'SELECT * FROM `Painting`');

    return [rows, fields];
}
