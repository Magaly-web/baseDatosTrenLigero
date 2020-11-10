const express = require('express');
const api = express.Router();
const MEME_C21 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C21')

api.get('/all-formsC21', MEME_C21.getAllMEME_C21TypeC)
api.post('/createC21', MEME_C21.createMEME_C21TypeC)
api.get('/get-historyC21/:id', MEME_C21.getHistoryOF)
api.put('/update-C21/:id', MEME_C21.editMEME_C21Data)
api.put('/historyUpdateC21/:id', MEME_C21.addNewHistoryrecord)
api.get('/getStateC21/:id', MEME_C21.getStateCheckedApprovalByWorker )
api.put('/updateSateC21/:id', MEME_C21.checkedApprovalByWorker)
api.get('/MEMEC21/:id', MEME_C21.getMEME_C21Data)


module.exports = api;