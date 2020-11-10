
const express = require('express');
const api = express.Router();
const MEMA_M27 = require('../../../controllers/smee/mema/MEMA_M27')

api.get('/all-formsM27', MEMA_M27.getAllmema_M27TypeM)
api.post('/createM27', MEMA_M27.createmema_M27TypeM)
api.get('/get-historyM27/:id', MEMA_M27.getHistoryOF)
api.put('/update-M27/:id', MEMA_M27.editmema_M27Data)
api.put('/historyUpdateM27/:id', MEMA_M27.addNewHistoryrecord)
api.get('/getStateM27/:id', MEMA_M27.getStateCheckedApprovalByWorker )
api.put('/updateSateM27/:id', MEMA_M27.checkedApprovalByWorker)
api.get('/MEMEM27/:id', MEMA_M27.getmema_M27Data)


module.exports = api;