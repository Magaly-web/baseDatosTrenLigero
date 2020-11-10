
const express = require('express');
const api = express.Router();
const MEMA_M20 = require('../../../controllers/smee/mema/MEMA_M20')

api.get('/all-formsM20', MEMA_M20.getAllmema_M20TypeM)
api.post('/createM20', MEMA_M20.createmema_M20TypeM)
api.get('/get-historyM20/:id', MEMA_M20.getHistoryOF)
api.put('/update-M20/:id', MEMA_M20.editmema_M20Data)
api.put('/historyUpdateM20/:id', MEMA_M20.addNewHistoryrecord)
api.get('/getStateM20/:id', MEMA_M20.getStateCheckedApprovalByWorker )
api.put('/updateSateM20/:id', MEMA_M20.checkedApprovalByWorker)
api.get('/MEMEM20/:id', MEMA_M20.getmema_M20Data)


module.exports = api;