
const express = require('express');
const api = express.Router();
const MEMA_M32 = require('../../../controllers/smee/mema/MEMA_M32')

api.get('/all-formsM32', MEMA_M32.getAllmema_M32TypeM)
api.post('/createM32', MEMA_M32.createmema_M32TypeM)
api.get('/get-historyM32/:id', MEMA_M32.getHistoryOF)
api.put('/update-M32/:id', MEMA_M32.editmema_M32Data)
api.put('/historyUpdateM32/:id', MEMA_M32.addNewHistoryrecord)
api.get('/getStateM32/:id', MEMA_M32.getStateCheckedApprovalByWorker )
api.put('/updateSateM32/:id', MEMA_M32.checkedApprovalByWorker)
api.get('/MEMEM32/:id', MEMA_M32.getmema_M32Data)


module.exports = api;