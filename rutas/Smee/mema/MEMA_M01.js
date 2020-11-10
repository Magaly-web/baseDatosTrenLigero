const express = require('express');
const api = express.Router();
const MEMA_M01 = require('../../../controllers/smee/mema/MEMA_M01')

api.get('/all-formsM01', MEMA_M01.getAllmema_M01TypeM)
api.post('/createM01', MEMA_M01.createmema_M01TypeM)
api.get('/get-historyM01/:id', MEMA_M01.getHistoryOF)
api.put('/update-M01/:id', MEMA_M01.editmema_M01Data)
api.put('/historyUpdateM01/:id', MEMA_M01.addNewHistoryrecord)
api.get('/getStateM01/:id', MEMA_M01.getStateCheckedApprovalByWorker )
api.put('/updateSateM01/:id', MEMA_M01.checkedApprovalByWorker)
api.get('/MEMEM01/:id', MEMA_M01.getmema_M01Data)


module.exports = api;