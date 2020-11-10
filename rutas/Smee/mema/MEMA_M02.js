const express = require('express');
const api = express.Router();
const MEMA_M02 = require('../../../controllers/smee/mema/MEMA_M02')

api.get('/all-formsM02', MEMA_M02.getAllmema_M02TypeM)
api.post('/createM02', MEMA_M02.createmema_M02TypeM)
api.get('/get-historyM02/:id', MEMA_M02.getHistoryOF)
api.put('/update-M02/:id', MEMA_M02.editmema_M02Data)
api.put('/historyUpdateM02/:id', MEMA_M02.addNewHistoryrecord)
api.get('/getStateM02/:id', MEMA_M02.getStateCheckedApprovalByWorker )
api.put('/updateSateM02/:id', MEMA_M02.checkedApprovalByWorker)
api.get('/MEMEM02/:id', MEMA_M02.getmema_M02Data)


module.exports = api;