const express = require('express');
const api = express.Router();
const MEMA_M04 = require('../../../controllers/smee/mema/MEMA_M04')

api.get('/all-formsM04', MEMA_M04.getAllmema_M04TypeM)
api.post('/createM04', MEMA_M04.createmema_M04TypeM)
api.get('/get-historyM04/:id', MEMA_M04.getHistoryOF)
api.put('/update-M04/:id', MEMA_M04.editmema_M04Data)
api.put('/historyUpdateM04/:id', MEMA_M04.addNewHistoryrecord)
api.get('/getStateM04/:id', MEMA_M04.getStateCheckedApprovalByWorker )
api.put('/updateSateM04/:id', MEMA_M04.checkedApprovalByWorker)
api.get('/MEMEM04/:id', MEMA_M04.getmema_M04Data)


module.exports = api;