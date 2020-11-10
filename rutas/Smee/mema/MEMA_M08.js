const express = require('express');
const api = express.Router();
const MEMA_M08 = require('../../../controllers/smee/mema/MEMA_M08')

api.get('/all-formsM08', MEMA_M08.getAllmema_M08TypeM)
api.post('/createM08', MEMA_M08.createmema_M08TypeM)
api.get('/get-historyM08/:id', MEMA_M08.getHistoryOF)
api.put('/update-M08/:id', MEMA_M08.editmema_M08Data)
api.put('/historyUpdateM08/:id', MEMA_M08.addNewHistoryrecord)
api.get('/getStateM08/:id', MEMA_M08.getStateCheckedApprovalByWorker )
api.put('/updateSateM08/:id', MEMA_M08.checkedApprovalByWorker)
api.get('/MEMEM08/:id', MEMA_M08.getmema_M08Data)


module.exports = api;