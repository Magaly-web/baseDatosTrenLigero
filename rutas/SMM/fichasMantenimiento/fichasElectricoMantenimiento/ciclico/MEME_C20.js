const express = require('express');
const api = express.Router();
const MEME_C20 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C20')

api.get('/all-formsC20', MEME_C20.getAllMEME_C20TypeC)
api.post('/createC20', MEME_C20.createMEME_C20TypeC)
api.get('/get-historyC20/:id', MEME_C20.getHistoryOF)
api.put('/update-C20/:id', MEME_C20.editMEME_C20Data)
api.put('/historyUpdateC20/:id', MEME_C20.addNewHistoryrecord)
api.get('/getStateC20/:id', MEME_C20.getStateCheckedApprovalByWorker )
api.put('/updateSateC20/:id', MEME_C20.checkedApprovalByWorker)
api.get('/MEMEC20/:id', MEME_C20.getMEME_C20Data)


module.exports = api;