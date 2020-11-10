
const express = require('express');
const api = express.Router();
const MEMA_M21 = require('../../../controllers/smee/mema/MEMA_M21')

api.get('/all-formsM21', MEMA_M21.getAllmema_M21TypeM)
api.post('/createM21', MEMA_M21.createmema_M21TypeM)
api.get('/get-historyM21/:id', MEMA_M21.getHistoryOF)
api.put('/update-M21/:id', MEMA_M21.editmema_M21Data)
api.put('/historyUpdateM21/:id', MEMA_M21.addNewHistoryrecord)
api.get('/getStateM21/:id', MEMA_M21.getStateCheckedApprovalByWorker )
api.put('/updateSateM21/:id', MEMA_M21.checkedApprovalByWorker)
api.get('/MEMEM21/:id', MEMA_M21.getmema_M21Data)


module.exports = api;