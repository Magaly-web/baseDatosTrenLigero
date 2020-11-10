
const express = require('express');
const api = express.Router();
const MEMA_M28 = require('../../../controllers/smee/mema/MEMA_M28')

api.get('/all-formsM28', MEMA_M28.getAllmema_M28TypeM)
api.post('/createM28', MEMA_M28.createmema_M28TypeM)
api.get('/get-historyM28/:id', MEMA_M28.getHistoryOF)
api.put('/update-M28/:id', MEMA_M28.editmema_M28Data)
api.put('/historyUpdateM28/:id', MEMA_M28.addNewHistoryrecord)
api.get('/getStateM28/:id', MEMA_M28.getStateCheckedApprovalByWorker )
api.put('/updateSateM28/:id', MEMA_M28.checkedApprovalByWorker)
api.get('/MEMEM28/:id', MEMA_M28.getmema_M28Data)


module.exports = api;