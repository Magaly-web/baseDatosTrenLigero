const express = require('express');
const api = express.Router();
const MEMA_M34 = require('../../../controllers/smee/mema/MEMA_M34')

api.get('/all-formsM34', MEMA_M34.getAllmema_M34TypeM)
api.post('/createM34', MEMA_M34.createmema_M34TypeM)
api.get('/get-historyM34/:id', MEMA_M34.getHistoryOF)
api.put('/update-M34/:id', MEMA_M34.editmema_M34Data)
api.put('/historyUpdateM34/:id', MEMA_M34.addNewHistoryrecord)
api.get('/getStateM34/:id', MEMA_M34.getStateCheckedApprovalByWorker )
api.put('/updateSateM34/:id', MEMA_M34.checkedApprovalByWorker)
api.get('/MEMEM34/:id', MEMA_M34.getmema_M34Data)


module.exports = api;