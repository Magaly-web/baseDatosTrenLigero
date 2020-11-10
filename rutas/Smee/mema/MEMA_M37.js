
const express = require('express');
const api = express.Router();
const MEMA_M37 = require('../../../controllers/smee/mema/MEMA_M37')

api.get('/all-formsM37', MEMA_M37.getAllmema_M37TypeM)
api.post('/createM37', MEMA_M37.createmema_M37TypeM)
api.get('/get-historyM37/:id', MEMA_M37.getHistoryOF)
api.put('/update-M37/:id', MEMA_M37.editmema_M37Data)
api.put('/historyUpdateM37/:id', MEMA_M37.addNewHistoryrecord)
api.get('/getStateM37/:id', MEMA_M37.getStateCheckedApprovalByWorker )
api.put('/updateSateM37/:id', MEMA_M37.checkedApprovalByWorker)
api.get('/MEMEM37/:id', MEMA_M37.getmema_M37Data)


module.exports = api;