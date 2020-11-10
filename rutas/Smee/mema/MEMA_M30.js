
const express = require('express');
const api = express.Router();
const MEMA_M30 = require('../../../controllers/smee/mema/MEMA_M30')

api.get('/all-formsM30', MEMA_M30.getAllmema_M30TypeM)
api.post('/createM30', MEMA_M30.createmema_M30TypeM)
api.get('/get-historyM30/:id', MEMA_M30.getHistoryOF)
api.put('/update-M30/:id', MEMA_M30.editmema_M30Data)
api.put('/historyUpdateM30/:id', MEMA_M30.addNewHistoryrecord)
api.get('/getStateM30/:id', MEMA_M30.getStateCheckedApprovalByWorker )
api.put('/updateSateM30/:id', MEMA_M30.checkedApprovalByWorker)
api.get('/MEMEM30/:id', MEMA_M30.getmema_M30Data)


module.exports = api;