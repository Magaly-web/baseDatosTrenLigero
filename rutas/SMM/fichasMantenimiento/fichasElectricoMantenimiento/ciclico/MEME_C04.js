const express = require('express');
const api = express.Router();
const MEME_C04 = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C04')

api.get('/all-formsC04', MEME_C04.getAllMEME_C04TypeC)
api.post('/createC04', MEME_C04.createMEME_C04TypeC)
api.get('/get-historyC04/:id', MEME_C04.getHistoryOF)
api.put('/update-C04/:id', MEME_C04.editMEME_C04Data)
api.put('/historyUpdateC04/:id', MEME_C04.addNewHistoryrecord)
api.get('/getStateC04/:id', MEME_C04.getStateCheckedApprovalByWorker )
api.put('/updateSateC04/:id', MEME_C04.checkedApprovalByWorker)
api.get('/MEMEC04/:id', MEME_C04.getMEME_C04Data)


module.exports = api;