const express = require('express');
const api = express.Router();
const MEME_C08 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C08')

api.get('/all-formsC08', MEME_C08.getAllMEME_C08TypeC)
api.post('/createC08', MEME_C08.createMEME_C08TypeC)
api.get('/get-historyC08/:id', MEME_C08.getHistoryOF)
api.put('/update-C08/:id', MEME_C08.editMEME_C08Data)
api.put('/historyUpdateC08/:id', MEME_C08.addNewHistoryrecord)
api.get('/getStateC08/:id', MEME_C08.getStateCheckedApprovalByWorker )
api.put('/updateSateC08/:id', MEME_C08.checkedApprovalByWorker)
api.get('/MEMEC08/:id', MEME_C08.getMEME_C08Data)


module.exports = api;