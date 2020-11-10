const express = require('express');
const api = express.Router();
const MEME_C17 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C17')

api.get('/all-formsC17', MEME_C17.getAllMEME_C17TypeC)
api.post('/createC17', MEME_C17.createMEME_C17TypeC)
api.get('/get-historyC17/:id', MEME_C17.getHistoryOF)
api.put('/update-C17/:id', MEME_C17.editMEME_C17Data)
api.put('/historyUpdateC17/:id', MEME_C17.addNewHistoryrecord)
api.get('/getStateC17/:id', MEME_C17.getStateCheckedApprovalByWorker )
api.put('/updateSateC17/:id', MEME_C17.checkedApprovalByWorker)
api.get('/MEMEC17/:id', MEME_C17.getMEME_C17Data)


module.exports = api;