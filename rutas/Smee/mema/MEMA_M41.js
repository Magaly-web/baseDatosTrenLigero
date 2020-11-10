
const express = require('express');
const api = express.Router();
const MEMA_M41 = require('../../../controllers/smee/mema/MEMA_M41')

api.get('/all-formsM41', MEMA_M41.getAllmema_M41TypeM)
api.post('/createM41', MEMA_M41.createmema_M41TypeM)
api.get('/get-historyM41/:id', MEMA_M41.getHistoryOF)
api.put('/update-M41/:id', MEMA_M41.editmema_M41Data)
api.put('/historyUpdateM41/:id', MEMA_M41.addNewHistoryrecord)
api.get('/getStateM41/:id', MEMA_M41.getStateCheckedApprovalByWorker )
api.put('/updateSateM41/:id', MEMA_M41.checkedApprovalByWorker)
api.get('/MEMEM41/:id', MEMA_M41.getmema_M41Data)


module.exports = api;