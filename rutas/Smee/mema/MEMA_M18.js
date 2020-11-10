
const express = require('express');
const api = express.Router();
const MEMA_M18 = require('../../../controllers/smee/mema/MEMA_M18')

api.get('/all-formsM18', MEMA_M18.getAllmema_M18TypeM)
api.post('/createM18', MEMA_M18.createmema_M18TypeM)
api.get('/get-historyM18/:id', MEMA_M18.getHistoryOF)
api.put('/update-M18/:id', MEMA_M18.editmema_M18Data)
api.put('/historyUpdateM18/:id', MEMA_M18.addNewHistoryrecord)
api.get('/getStateM18/:id', MEMA_M18.getStateCheckedApprovalByWorker )
api.put('/updateSateM18/:id', MEMA_M18.checkedApprovalByWorker)
api.get('/MEMEM18/:id', MEMA_M18.getmema_M18Data)


module.exports = api;