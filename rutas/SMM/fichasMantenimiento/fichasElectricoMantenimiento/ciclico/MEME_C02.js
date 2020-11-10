
const express = require('express');
const api = express.Router();
const MEME_C02 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C02')

api.get('/all-formsC02', MEME_C02.getAllMEME_C02TypeC)
api.post('/createC02', MEME_C02.createMEME_C02TypeC)
api.get('/get-historyC02/:id', MEME_C02.getHistoryOF)
api.put('/update-C02/:id', MEME_C02.editMEME_C02Data)
api.put('/historyUpdateC02/:id', MEME_C02.addNewHistoryrecord)
api.get('/getStateC02/:id', MEME_C02.getStateCheckedApprovalByWorker )
api.put('/updateSateC02/:id', MEME_C02.checkedApprovalByWorker)
api.get('/MEMEC02/:id', MEME_C02.getMEME_C02Data)


module.exports = api;