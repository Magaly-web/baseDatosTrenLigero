
const express = require('express');
const api = express.Router();
const MEMA_M26 = require('../../../controllers/smee/mema/MEMA_M26')

api.get('/all-formsM26', MEMA_M26.getAllmema_M26TypeM)
api.post('/createM26', MEMA_M26.createmema_M26TypeM)
api.get('/get-historyM26/:id', MEMA_M26.getHistoryOF)
api.put('/update-M26/:id', MEMA_M26.editmema_M26Data)
api.put('/historyUpdateM26/:id', MEMA_M26.addNewHistoryrecord)
api.get('/getStateM26/:id', MEMA_M26.getStateCheckedApprovalByWorker )
api.put('/updateSateM26/:id', MEMA_M26.checkedApprovalByWorker)
api.get('/MEMEM26/:id', MEMA_M26.getmema_M26Data)


module.exports = api;