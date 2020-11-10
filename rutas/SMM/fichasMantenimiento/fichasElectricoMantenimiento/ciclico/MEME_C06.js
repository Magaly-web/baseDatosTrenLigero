const express = require('express');
const api = express.Router();
const MEME_C06 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C06')

api.get('/all-formsC06', MEME_C06.getAllMEME_C06TypeC)
api.post('/createC06', MEME_C06.createMEME_C06TypeC)
api.get('/get-historyC06/:id', MEME_C06.getHistoryOF)
api.put('/update-C06/:id', MEME_C06.editMEME_C06Data)
api.put('/historyUpdateC06/:id', MEME_C06.addNewHistoryrecord)
api.get('/getStateC06/:id', MEME_C06.getStateCheckedApprovalByWorker )
api.put('/updateSateC06/:id', MEME_C06.checkedApprovalByWorker)
api.get('/MEMEC06/:id', MEME_C06.getMEME_C06Data)


module.exports = api;