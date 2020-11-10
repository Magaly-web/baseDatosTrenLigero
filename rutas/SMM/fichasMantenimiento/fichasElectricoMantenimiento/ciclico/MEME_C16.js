const express = require('express');
const api = express.Router();
const MEME_C16 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C16')

api.get('/all-formsC16', MEME_C16.getAllMEME_C16TypeC)
api.post('/createC16', MEME_C16.createMEME_C16TypeC)
api.get('/get-historyC16/:id', MEME_C16.getHistoryOF)
api.put('/update-C16/:id', MEME_C16.editMEME_C16Data)
api.put('/historyUpdateC16/:id', MEME_C16.addNewHistoryrecord)
api.get('/getStateC16/:id', MEME_C16.getStateCheckedApprovalByWorker )
api.put('/updateSateC16/:id', MEME_C16.checkedApprovalByWorker)
api.get('/MEMEC16/:id', MEME_C16.getMEME_C16Data)


module.exports = api;