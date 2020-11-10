const express = require('express');
const api = express.Router();
const MEME_C03 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C03')

api.get('/all-formsC03', MEME_C03.getAllMEME_C03TypeC)
api.post('/createC03', MEME_C03.createMEME_C03TypeC)
api.get('/get-historyC03/:id', MEME_C03.getHistoryOF)
api.put('/update-C03/:id', MEME_C03.editMEME_C03Data)
api.put('/historyUpdateC03/:id', MEME_C03.addNewHistoryrecord)
api.get('/getStateC03/:id', MEME_C03.getStateCheckedApprovalByWorker )
api.put('/updateSateC03/:id', MEME_C03.checkedApprovalByWorker)
api.get('/MEMEC03/:id', MEME_C03.getMEME_C03Data)


module.exports = api;