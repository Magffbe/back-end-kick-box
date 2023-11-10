const pgp = require('pg-promise')();
require('dotenv').config();

const user = process.env.USER;
const pass = process.env.PASS;
const host = process.env.HOST;
const database = process.env.DATABASE;

const encodedPass = encodeURIComponent(pass);
const connectionString = `postgres://${user}:${encodedPass}@${host}:5432/${database}`;
const db = pgp(connectionStrinng);

db.connect()
  .then(()=> {
    console.log("Conexión exitosa");
  })
  .catch((err) => {
    console.log(`Error de conexión:${err}`);
  })

  module.exports = db;