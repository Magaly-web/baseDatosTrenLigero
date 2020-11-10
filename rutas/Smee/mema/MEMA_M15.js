
const express = require('express');
const api = express.Router();
const MEMA_M15 = require('../../../controllers/smee/mema/MEMA_M15')

api.get('/all-formsM15', MEMA_M15.getAllmema_M15TypeM)
api.post('/createM15', MEMA_M15.createmema_M15TypeM)
api.get('/get-historyM15/:id', MEMA_M15.getHistoryOF)
api.put('/update-M15/:id', MEMA_M15.editmema_M15Data)
api.put('/historyUpdateM15/:id', MEMA_M15.addNewHistoryrecord)
api.get('/getStateM15/:id', MEMA_M15.getStateCheckedApprovalByWorker )
api.put('/updateSateM15/:id', MEMA_M15.checkedApprovalByWorker)
api.get('/MEMEM15/:id', MEMA_M15.getmema_M15Data)


module.exports = api;