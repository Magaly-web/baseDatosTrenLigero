
const express = require('express');
const api = express.Router();
const MEMA_M14 = require('../../../controllers/smee/mema/MEMA_M14')

api.get('/all-formsM14', MEMA_M14.getAllmema_M14TypeM)
api.post('/createM14', MEMA_M14.createmema_M14TypeM)
api.get('/get-historyM14/:id', MEMA_M14.getHistoryOF)
api.put('/update-M14/:id', MEMA_M14.editmema_M14Data)
api.put('/historyUpdateM14/:id', MEMA_M14.addNewHistoryrecord)
api.get('/getStateM14/:id', MEMA_M14.getStateCheckedApprovalByWorker )
api.put('/updateSateM14/:id', MEMA_M14.checkedApprovalByWorker)
api.get('/MEMEM14/:id', MEMA_M14.getmema_M14Data)


module.exports = api;