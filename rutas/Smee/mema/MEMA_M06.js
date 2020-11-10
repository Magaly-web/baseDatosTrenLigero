const express = require('express');
const api = express.Router();
const MEMA_M06 = require('../../../controllers/smee/mema/MEMA_M06')

api.get('/all-formsM06', MEMA_M06.getAllmema_M06TypeM)
api.post('/createM06', MEMA_M06.createmema_M06TypeM)
api.get('/get-historyM06/:id', MEMA_M06.getHistoryOF)
api.put('/update-M06/:id', MEMA_M06.editmema_M06Data)
api.put('/historyUpdateM06/:id', MEMA_M06.addNewHistoryrecord)
api.get('/getStateM06/:id', MEMA_M06.getStateCheckedApprovalByWorker )
api.put('/updateSateM06/:id', MEMA_M06.checkedApprovalByWorker)
api.get('/MEMEM06/:id', MEMA_M06.getmema_M06Data)


module.exports = api;