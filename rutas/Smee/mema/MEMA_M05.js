const express = require('express');
const api = express.Router();
const MEMA_M05 = require('../../../controllers/smee/mema/MEMA_M05')

api.get('/all-formsM05', MEMA_M05.getAllmema_M05TypeM)
api.post('/createM05', MEMA_M05.createmema_M05TypeM)
api.get('/get-historyM05/:id', MEMA_M05.getHistoryOF)
api.put('/update-M05/:id', MEMA_M05.editmema_M05Data)
api.put('/historyUpdateM05/:id', MEMA_M05.addNewHistoryrecord)
api.get('/getStateM05/:id', MEMA_M05.getStateCheckedApprovalByWorker )
api.put('/updateSateM05/:id', MEMA_M05.checkedApprovalByWorker)
api.get('/MEMEM05/:id', MEMA_M05.getmema_M05Data)


module.exports = api;