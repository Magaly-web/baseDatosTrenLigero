const express = require('express');
const api = express.Router();
const MEME_C13 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C13')

api.get('/all-formsC13', MEME_C13.getAllMEME_C13TypeC)
api.post('/createC13', MEME_C13.createMEME_C13TypeC)
api.get('/get-historyC13/:id', MEME_C13.getHistoryOF)
api.put('/update-C13/:id', MEME_C13.editMEME_C13Data)
api.put('/historyUpdateC13/:id', MEME_C13.addNewHistoryrecord)
api.get('/getStateC13/:id', MEME_C13.getStateCheckedApprovalByWorker )
api.put('/updateSateC13/:id', MEME_C13.checkedApprovalByWorker)
api.get('/MEMEC13/:id', MEME_C13.getMEME_C13Data)


module.exports = api;