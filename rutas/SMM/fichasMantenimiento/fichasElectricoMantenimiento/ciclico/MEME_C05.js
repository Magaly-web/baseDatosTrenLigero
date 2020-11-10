const express = require('express');
const api = express.Router();
const MEME_C05 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C05')

api.get('/all-formsC05', MEME_C05.getAllMEME_C05TypeC)
api.post('/createC05', MEME_C05.createMEME_C05TypeC)
api.get('/get-historyC05/:id', MEME_C05.getHistoryOF)
api.put('/update-C05/:id', MEME_C05.editMEME_C05Data)
api.put('/historyUpdateC05/:id', MEME_C05.addNewHistoryrecord)
api.get('/getStateC05/:id', MEME_C05.getStateCheckedApprovalByWorker )
api.put('/updateSateC05/:id', MEME_C05.checkedApprovalByWorker)
api.get('/MEMEC05/:id', MEME_C05.getMEME_C05Data)


module.exports = api;