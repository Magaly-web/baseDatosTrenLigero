
const express = require('express');
const api = express.Router();
const MEMA_M23 = require('../../../controllers/smee/mema/MEMA_M23')

api.get('/all-formsM23', MEMA_M23.getAllmema_M23TypeM)
api.post('/createM23', MEMA_M23.createmema_M23TypeM)
api.get('/get-historyM23/:id', MEMA_M23.getHistoryOF)
api.put('/update-M23/:id', MEMA_M23.editmema_M23Data)
api.put('/historyUpdateM23/:id', MEMA_M23.addNewHistoryrecord)
api.get('/getStateM23/:id', MEMA_M23.getStateCheckedApprovalByWorker )
api.put('/updateSateM23/:id', MEMA_M23.checkedApprovalByWorker)
api.get('/MEMEM23/:id', MEMA_M23.getmema_M23Data)


module.exports = api;