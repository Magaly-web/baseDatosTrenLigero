const express = require('express');
const api = express.Router();
const MEME_C11 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C11')

api.get('/all-formsC11', MEME_C11.getAllMEME_C11TypeC)
api.post('/createC11', MEME_C11.createMEME_C11TypeC)
api.get('/get-historyC11/:id', MEME_C11.getHistoryOF)
api.put('/update-C11/:id', MEME_C11.editMEME_C11Data)
api.put('/historyUpdateC11/:id', MEME_C11.addNewHistoryrecord)
api.get('/getStateC11/:id', MEME_C11.getStateCheckedApprovalByWorker )
api.put('/updateSateC11/:id', MEME_C11.checkedApprovalByWorker)
api.get('/MEMEC11/:id', MEME_C11.getMEME_C11Data)


module.exports = api;