const express = require('express');
const api = express.Router();
const MEME_C12 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C12')

api.get('/all-formsC12', MEME_C12.getAllMEME_C12TypeC)
api.post('/createC12', MEME_C12.createMEME_C12TypeC)
api.get('/get-historyC12/:id', MEME_C12.getHistoryOF)
api.put('/update-C12/:id', MEME_C12.editMEME_C12Data)
api.put('/historyUpdateC12/:id', MEME_C12.addNewHistoryrecord)
api.get('/getStateC12/:id', MEME_C12.getStateCheckedApprovalByWorker )
api.put('/updateSateC12/:id', MEME_C12.checkedApprovalByWorker)
api.get('/MEMEC12/:id', MEME_C12.getMEME_C12Data)


module.exports = api;