const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const apiprogramaActividades = require('./routes/apiprogramaActividades');

app.listen(3000,() => {
    console.log('Servidor en ejecución en el puerto 3000'); 
});