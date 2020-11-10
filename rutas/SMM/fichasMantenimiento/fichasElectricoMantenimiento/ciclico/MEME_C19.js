const express = require('express');
const api = express.Router();
const MEME_C19 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C19')

api.get('/all-formsC19', MEME_C19.getAllMEME_C19TypeC)
api.post('/createC19', MEME_C19.createMEME_C19TypeC)
api.get('/get-historyC19/:id', MEME_C19.getHistoryOF)
api.put('/update-C19/:id', MEME_C19.editMEME_C19Data)
api.put('/historyUpdateC19/:id', MEME_C19.addNewHistoryrecord)
api.get('/getStateC19/:id', MEME_C19.getStateCheckedApprovalByWorker )
api.put('/updateSateC19/:id', MEME_C19.checkedApprovalByWorker)
api.get('/MEMEC19/:id', MEME_C19.getMEME_C19Data)


module.exports = api;