
const express = require('express');
const api = express.Router();
const MEMA_M16 = require('../../../controllers/smee/mema/MEMA_M16')

api.get('/all-formsM16', MEMA_M16.getAllmema_M16TypeM)
api.post('/createM16', MEMA_M16.createmema_M16TypeM)
api.get('/get-historyM16/:id', MEMA_M16.getHistoryOF)
api.put('/update-M16/:id', MEMA_M16.editmema_M16Data)
api.put('/historyUpdateM16/:id', MEMA_M16.addNewHistoryrecord)
api.get('/getStateM16/:id', MEMA_M16.getStateCheckedApprovalByWorker )
api.put('/updateSateM16/:id', MEMA_M16.checkedApprovalByWorker)
api.get('/MEMEM16/:id', MEMA_M16.getmema_M16Data)


module.exports = api;