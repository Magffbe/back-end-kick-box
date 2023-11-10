const express = require('express');
const apiprogramaActividades = express.Router();
const {getprogramaActividades, postprogramaActividades} = require('/controllers/apiprogramaActividades')


apiprogramaActividades.get('/',getprogramaActividades);
apiprogramaActividades.get('/:id', getidprogramaActividades);
apiprogramaActividades.post('/', postprogramaActividades);
apiprogramaActividades.put('/:id',putprogramaActividades);
apiprogramaActividades.delete('/:id',deleteprogramaActividades);


module.exports = apiprogramaActividades;