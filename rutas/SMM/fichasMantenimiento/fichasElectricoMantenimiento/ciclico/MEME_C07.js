const express = require('express');
const api = express.Router();
const MEME_C07 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C07')

api.get('/all-formsC07', MEME_C07.getAllMEME_C07TypeC)
api.post('/createC07', MEME_C07.createMEME_C07TypeC)
api.get('/get-historyC07/:id', MEME_C07.getHistoryOF)
api.put('/update-C07/:id', MEME_C07.editMEME_C07Data)
api.put('/historyUpdateC07/:id', MEME_C07.addNewHistoryrecord)
api.get('/getStateC07/:id', MEME_C07.getStateCheckedApprovalByWorker )
api.put('/updateSateC07/:id', MEME_C07.checkedApprovalByWorker)
api.get('/MEMEC07/:id', MEME_C07.getMEME_C07Data)


module.exports = api;