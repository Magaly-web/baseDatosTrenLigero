
const express = require('express');
const api = express.Router();
const MEMA_M36 = require('../../../controllers/smee/mema/MEMA_M36')

api.get('/all-formsM36', MEMA_M36.getAllmema_M36TypeM)
api.post('/createM36', MEMA_M36.createmema_M36TypeM)
api.get('/get-historyM36/:id', MEMA_M36.getHistoryOF)
api.put('/update-M36/:id', MEMA_M36.editmema_M36Data)
api.put('/historyUpdateM36/:id', MEMA_M36.addNewHistoryrecord)
api.get('/getStateM36/:id', MEMA_M36.getStateCheckedApprovalByWorker )
api.put('/updateSateM36/:id', MEMA_M36.checkedApprovalByWorker)
api.get('/MEMEM36/:id', MEMA_M36.getmema_M36Data)


module.exports = api;