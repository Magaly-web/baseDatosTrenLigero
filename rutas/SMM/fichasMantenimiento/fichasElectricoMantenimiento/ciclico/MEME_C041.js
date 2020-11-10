const express = require('express');
const api = express.Router();
const MEME_C041 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C041')

api.get('/all-formsC041', MEME_C041.getAllMEME_C041TypeC)
api.post('/createC041', MEME_C041.createMEME_C041TypeC)
api.get('/get-historyC041/:id', MEME_C041.getHistoryOF)
api.put('/update-C041/:id', MEME_C041.editMEME_C041Data)
api.put('/historyUpdateC041/:id', MEME_C041.addNewHistoryrecord)
api.get('/getStateC041/:id', MEME_C041.getStateCheckedApprovalByWorker )
api.put('/updateSateC041/:id', MEME_C041.checkedApprovalByWorker)
api.get('/MEMEC041/:id', MEME_C041.getMEME_C041Data)


module.exports = api;