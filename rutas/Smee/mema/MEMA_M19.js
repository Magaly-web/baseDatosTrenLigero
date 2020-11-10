
const express = require('express');
const api = express.Router();
const MEMA_M19 = require('../../../controllers/smee/mema/MEMA_M19')

api.get('/all-formsM19', MEMA_M19.getAllmema_M19TypeM)
api.post('/createM19', MEMA_M19.createmema_M19TypeM)
api.get('/get-historyM19/:id', MEMA_M19.getHistoryOF)
api.put('/update-M19/:id', MEMA_M19.editmema_M19Data)
api.put('/historyUpdateM19/:id', MEMA_M19.addNewHistoryrecord)
api.get('/getStateM19/:id', MEMA_M19.getStateCheckedApprovalByWorker )
api.put('/updateSateM19/:id', MEMA_M19.checkedApprovalByWorker)
api.get('/MEMEM19/:id', MEMA_M19.getmema_M19Data)


module.exports = api;