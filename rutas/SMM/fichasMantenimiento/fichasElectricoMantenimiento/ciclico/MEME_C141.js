const express = require('express');
const api = express.Router();
const MEME_C141 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C141')

api.get('/all-formsC141', MEME_C141.getAllMEME_C141TypeC)
api.post('/createC141', MEME_C141.createMEME_C141TypeC)
api.get('/get-historyC141/:id', MEME_C141.getHistoryOF)
api.put('/update-C141/:id', MEME_C141.editMEME_C141Data)
api.put('/historyUpdateC141/:id', MEME_C141.addNewHistoryrecord)
api.get('/getStateC141/:id', MEME_C141.getStateCheckedApprovalByWorker )
api.put('/updateSateC141/:id', MEME_C141.checkedApprovalByWorker)
api.get('/MEMEC141/:id', MEME_C141.getMEME_C141Data)


module.exports = api;