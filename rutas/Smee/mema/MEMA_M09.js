
const express = require('express');
const api = express.Router();
const MEMA_M09 = require('../../../controllers/smee/mema/MEMA_M09')

api.get('/all-formsM09', MEMA_M09.getAllmema_M09TypeM)
api.post('/createM09', MEMA_M09.createmema_M09TypeM)
api.get('/get-historyM09/:id', MEMA_M09.getHistoryOF)
api.put('/update-M09/:id', MEMA_M09.editmema_M09Data)
api.put('/historyUpdateM09/:id', MEMA_M09.addNewHistoryrecord)
api.get('/getStateM09/:id', MEMA_M09.getStateCheckedApprovalByWorker )
api.put('/updateSateM09/:id', MEMA_M09.checkedApprovalByWorker)
api.get('/MEMEM09/:id', MEMA_M09.getmema_M09Data)


module.exports = api;