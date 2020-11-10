
const express = require('express');
const api = express.Router();
const MEMA_M24 = require('../../../controllers/smee/mema/MEMA_M24')

api.get('/all-formsM24', MEMA_M24.getAllmema_M24TypeM)
api.post('/createM24', MEMA_M24.createmema_M24TypeM)
api.get('/get-historyM24/:id', MEMA_M24.getHistoryOF)
api.put('/update-M24/:id', MEMA_M24.editmema_M24Data)
api.put('/historyUpdateM24/:id', MEMA_M24.addNewHistoryrecord)
api.get('/getStateM24/:id', MEMA_M24.getStateCheckedApprovalByWorker )
api.put('/updateSateM24/:id', MEMA_M24.checkedApprovalByWorker)
api.get('/MEMEM24/:id', MEMA_M24.getmema_M24Data)


module.exports = api;