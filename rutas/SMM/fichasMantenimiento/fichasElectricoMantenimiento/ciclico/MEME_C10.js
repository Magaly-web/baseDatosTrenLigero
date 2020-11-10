const express = require('express');
const api = express.Router();
const MEME_C10 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C10')

api.get('/all-formsC10', MEME_C10.getAllMEME_C10TypeC)
api.post('/createC10', MEME_C10.createMEME_C10TypeC)
api.get('/get-historyC10/:id', MEME_C10.getHistoryOF)
api.put('/update-C10/:id', MEME_C10.editMEME_C10Data)
api.put('/historyUpdateC10/:id', MEME_C10.addNewHistoryrecord)
api.get('/getStateC10/:id', MEME_C10.getStateCheckedApprovalByWorker )
api.put('/updateSateC10/:id', MEME_C10.checkedApprovalByWorker)
api.get('/MEMEC10/:id', MEME_C10.getMEME_C10Data)


module.exports = api;