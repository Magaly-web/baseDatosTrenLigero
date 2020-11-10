const express = require('express');
const api = express.Router();
const MEMA_M07 = require('../../../controllers/smee/mema/MEMA_M07')

api.get('/all-formsM07', MEMA_M07.getAllmema_M07TypeM)
api.post('/createM07', MEMA_M07.createmema_M07TypeM)
api.get('/get-historyM07/:id', MEMA_M07.getHistoryOF)
api.put('/update-M07/:id', MEMA_M07.editmema_M07Data)
api.put('/historyUpdateM07/:id', MEMA_M07.addNewHistoryrecord)
api.get('/getStateM07/:id', MEMA_M07.getStateCheckedApprovalByWorker )
api.put('/updateSateM07/:id', MEMA_M07.checkedApprovalByWorker)
api.get('/MEMEM07/:id', MEMA_M07.getmema_M07Data)


module.exports = api;