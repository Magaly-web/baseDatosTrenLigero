const express = require('express');
const api = express.Router();
const MEME_C15 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C15')

api.get('/all-formsC15', MEME_C15.getAllMEME_C15TypeC)
api.post('/createC15', MEME_C15.createMEME_C15TypeC)
api.get('/get-historyC15/:id', MEME_C15.getHistoryOF)
api.put('/update-C15/:id', MEME_C15.editMEME_C15Data)
api.put('/historyUpdateC15/:id', MEME_C15.addNewHistoryrecord)
api.get('/getStateC15/:id', MEME_C15.getStateCheckedApprovalByWorker )
api.put('/updateSateC15/:id', MEME_C15.checkedApprovalByWorker)
api.get('/MEMEC15/:id', MEME_C15.getMEME_C15Data)


module.exports = api;