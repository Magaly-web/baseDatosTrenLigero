
const express = require('express');
const api = express.Router();
const MEMA_M29 = require('../../../controllers/smee/mema/MEMA_M29')

api.get('/all-formsM29', MEMA_M29.getAllmema_M29TypeM)
api.post('/createM29', MEMA_M29.createmema_M29TypeM)
api.get('/get-historyM29/:id', MEMA_M29.getHistoryOF)
api.put('/update-M29/:id', MEMA_M29.editmema_M29Data)
api.put('/historyUpdateM29/:id', MEMA_M29.addNewHistoryrecord)
api.get('/getStateM29/:id', MEMA_M29.getStateCheckedApprovalByWorker )
api.put('/updateSateM29/:id', MEMA_M29.checkedApprovalByWorker)
api.get('/MEMEM29/:id', MEMA_M29.getmema_M29Data)


module.exports = api;