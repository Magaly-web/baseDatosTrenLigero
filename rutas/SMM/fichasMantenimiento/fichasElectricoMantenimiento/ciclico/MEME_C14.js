const express = require('express');
const api = express.Router();
const MEME_C14 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C14')

api.get('/all-formsC14', MEME_C14.getAllMEME_C14TypeC)
api.post('/createC14', MEME_C14.createMEME_C14TypeC)
api.get('/get-historyC14/:id', MEME_C14.getHistoryOF)
api.put('/update-C14/:id', MEME_C14.editMEME_C14Data)
api.put('/historyUpdateC14/:id', MEME_C14.addNewHistoryrecord)
api.get('/getStateC14/:id', MEME_C14.getStateCheckedApprovalByWorker )
api.put('/updateSateC14/:id', MEME_C14.checkedApprovalByWorker)
api.get('/MEMEC14/:id', MEME_C14.getMEME_C14Data)


module.exports = api;