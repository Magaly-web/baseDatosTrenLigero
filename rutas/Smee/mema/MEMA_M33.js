
const express = require('express');
const api = express.Router();
const MEMA_M33 = require('../../../controllers/smee/mema/MEMA_M33')

api.get('/all-formsM33', MEMA_M33.getAllmema_M33TypeM)
api.post('/createM33', MEMA_M33.createmema_M33TypeM)
api.get('/get-historyM33/:id', MEMA_M33.getHistoryOF)
api.put('/update-M33/:id', MEMA_M33.editmema_M33Data)
api.put('/historyUpdateM33/:id', MEMA_M33.addNewHistoryrecord)
api.get('/getStateM33/:id', MEMA_M33.getStateCheckedApprovalByWorker )
api.put('/updateSateM33/:id', MEMA_M33.checkedApprovalByWorker)
api.get('/MEMEM33/:id', MEMA_M33.getmema_M33Data)


module.exports = api;