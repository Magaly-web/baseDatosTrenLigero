const express = require('express');
const api = express.Router();
const MEME_C18 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C18')

api.get('/all-formsC18', MEME_C18.getAllMEME_C18TypeC)
api.post('/createC18', MEME_C18.createMEME_C18TypeC)
api.get('/get-historyC18/:id', MEME_C18.getHistoryOF)
api.put('/update-C18/:id', MEME_C18.editMEME_C18Data)
api.put('/historyUpdateC18/:id', MEME_C18.addNewHistoryrecord)
api.get('/getStateC18/:id', MEME_C18.getStateCheckedApprovalByWorker )
api.put('/updateSateC18/:id', MEME_C18.checkedApprovalByWorker)
api.get('/MEMEC18/:id', MEME_C18.getMEME_C18Data)


module.exports = api;