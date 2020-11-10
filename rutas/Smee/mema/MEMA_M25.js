
const express = require('express');
const api = express.Router();
const MEMA_M25 = require('../../../controllers/smee/mema/MEMA_M25')

api.get('/all-formsM25', MEMA_M25.getAllmema_M25TypeM)
api.post('/createM25', MEMA_M25.createmema_M25TypeM)
api.get('/get-historyM25/:id', MEMA_M25.getHistoryOF)
api.put('/update-M25/:id', MEMA_M25.editmema_M25Data)
api.put('/historyUpdateM25/:id', MEMA_M25.addNewHistoryrecord)
api.get('/getStateM25/:id', MEMA_M25.getStateCheckedApprovalByWorker )
api.put('/updateSateM25/:id', MEMA_M25.checkedApprovalByWorker)
api.get('/MEMEM25/:id', MEMA_M25.getmema_M25Data)


module.exports = api;