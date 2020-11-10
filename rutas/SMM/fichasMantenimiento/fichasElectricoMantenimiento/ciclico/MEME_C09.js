const express = require('express');
const api = express.Router();
const MEME_C09 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C09')

api.get('/all-formsC09', MEME_C09.getAllMEME_C09TypeC)
api.post('/createC09', MEME_C09.createMEME_C09TypeC)
api.get('/get-historyC09/:id', MEME_C09.getHistoryOF)
api.put('/update-C09/:id', MEME_C09.editMEME_C09Data)
api.put('/historyUpdateC09/:id', MEME_C09.addNewHistoryrecord)
api.get('/getStateC09/:id', MEME_C09.getStateCheckedApprovalByWorker )
api.put('/updateSateC09/:id', MEME_C09.checkedApprovalByWorker)
api.get('/MEMEC09/:id', MEME_C09.getMEME_C09Data)


module.exports = api;